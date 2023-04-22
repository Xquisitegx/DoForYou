const catchAsync = require("../utils/catchAsync");
const authController = require("../controllers/authController");
const messageController = require("../controllers/messageController");

// const Message = require("../models/messageModel");
const Room = require("../models/roomModel");
const User = require("../models/userModel");
const Task = require("../models/taskModel");

exports.getAllRooms = catchAsync(async (req, res, next) => {
    const rooms = await Room.find();

    res.status(200).json({
        status: "success",
        results: rooms.length,
        rooms
    });
}); 

exports.getParticipatedRooms = catchAsync(async (req, res, next) => {
    const userId = await authController.decodeToken(req.params.userId);
    // const user = await User.findById(userId);
    const rooms = await Room.find({
        "participants.user": userId
    }).populate("participants.user");

    res.status(200).json({
        status: "success",
        results: rooms.length,
        rooms
    });
});

exports.createRoom = catchAsync(async (req, res, next) => {
    const user1 = await User.findById(req.body.customerId);
    const user2 = await User.findById(req.body.performerId);
    const task = await Task.findById(req.body.taskId);

    const room = await Room.create({
        participants: [{ user: user1 }, { user: user2 }],
        task
    });

    const data = {
        roomId: room._id,
        firstname: user2.firstname,
        message: "~|+_",
    }
    messageController.insertMessageIntoDB(data);

    res.status(201).json({
        status: "success",
        room
    });
});

exports.getUnreadNotification = catchAsync(async (req, res, next) => {
    const user = await User.findOne({ firstname: req.params.firstname });
    const rooms = await Room.find({ "participants.user": user._id });
    
    let count = 0;
    for (const room of rooms) {
        for (const participant of room.participants) {
            if (participant.user._id.equals(user._id)) {
                if (participant.disconnectedAt < room.lastContactAt) {
                    // console.log(room._id, user.firstname);
                    // console.log(new Date(participant.disconnectedAt).toISOString(), new Date(room.lastContactAt).toISOString());
                    count += 1;
                }
            }
        }
    }

    res.status(200).json({
        status: "success",
        count
    });
});

exports.joinRoom = async (roomId, firstname) => {
    const user = await User.findOne({ firstname });
    const room = await Room.findById(roomId);

    if (room.isInParticipants(user) === false) {
        await Room.findByIdAndUpdate(room._id, {
            $push: { participants: { user } }
        });
    }
};

exports.exitRoom = async (roomId, firstname) => {
    const user = await User.findOne({ firstname });
    const room = await Room.findOneAndUpdate(
        { _id: roomId, "participants.user": user._id },
        { $set: { "participants.$.disconnectedAt": Date.now() }},
        { new: true });
}