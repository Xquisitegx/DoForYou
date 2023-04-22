const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Chat Room"
    },
    task: {
        type: mongoose.Schema.ObjectId,
        ref: "Task"
    },
    participants: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            disconnectedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastContactAt: {
        type: Date
    }
});

roomSchema.methods.isInParticipants = function(user) {
    for (const participant of this.participants) {
        if (participant.user.equals(user._id)) {
            return true;
        }
    }

    return false;
}

module.exports = mongoose.model("Room", roomSchema);