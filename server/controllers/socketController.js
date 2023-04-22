const socket = require("socket.io");

const messageController = require("../controllers/messageController");
const roomController = require("../controllers/roomController");

let chatInfo = {}

const joinRoom = socket => {
    socket.on("join_room", data => {
        socket.join(data.roomId);

        const [socketId, roomId] = socket.rooms;
        chatInfo[socketId] = {
            roomId,
            firstname: data.firstname
        }

        messageController
            .retrieveMessages(data.roomId)
            .then(messages => {
                socket.emit("send_previous_messages", messages);
            });
    });
}

const receiveMessage = socket => {
    socket.emit("connect_server", `${socket.id} has been connected`);
}

const sendReceivedMessage = socket => {
    socket.on("send_message", data => {
        messageController.insertMessageIntoDB(data);

        socket.in(data.roomId).emit("retrieve_message", {message: data.message, sender: data.firstname});
    });
}

const handleDisconnection = socket => {
    socket.on("disconnect", () => {
        if (socket.id in chatInfo) {
            roomController.exitRoom(chatInfo[socket.id]["roomId"], chatInfo[socket.id]["firstname"]);

            delete chatInfo[socket.id];
        }
    });
}

exports.connection = socket => {
    joinRoom(socket);

    sendReceivedMessage(socket);

    handleDisconnection(socket);
}