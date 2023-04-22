const mongoose = require("mongoose");

const reviewCustomerSchema = mongoose.Schema({
    task: {
        type: mongoose.Schema.ObjectId,
        ref: "Task"
    },
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    likes: {
        type: Boolean
    },
    tags: {
        type: [String],
        enum: [
            "Punctual payment",
            "Good manners",
            "Friendly",
            "Great Communication",
            "Reasonable request",
            "Positive",
            "Payment delay",
            "Lack of description",
            "Rude",
            "Poor Communication",
            "Unreasonable request",
            "Negative"
        ]
    }
});

module.exports = mongoose.model("ReviewCustomer", reviewCustomerSchema);