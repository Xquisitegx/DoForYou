const mongoose = require("mongoose");

const reviewPerformerSchema = mongoose.Schema({
    task: {
        type: mongoose.Schema.ObjectId,
        ref: "Task"
    },
    performer: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    rating: {
        type: Number,
        default: 1
    },
    average_rating: {
        type: Number,
    },
    review: {
        type: String
    }
});

module.exports = mongoose.model("ReviewPeformer", reviewPerformerSchema);