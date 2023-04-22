const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "A message must belong to a sender(user)"]
    },
    room: {
        type: mongoose.Schema.ObjectId,
        ref: "Room",
        required: [true, "A message must belong to a room"]
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Message", messageSchema);