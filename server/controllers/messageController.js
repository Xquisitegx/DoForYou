const Message = require("../models/messageModel");
const Room = require("../models/roomModel");
const User = require("../models/userModel");

exports.insertMessageIntoDB = async data => {
    const user = await User.findOne({ firstname: data.firstname });
    if (user === null) {
        return;
    }

    const message = await Message.create({
        sender: user._id,
        room: data.roomId,
        message: data.message
    });

    await Room.findByIdAndUpdate(data.roomId, { lastContactAt: message.sentAt });
};

exports.retrieveMessages = async roomId => {
    const messages = 
        await Message.find({ room: roomId }).populate("sender");
    return messages;
}