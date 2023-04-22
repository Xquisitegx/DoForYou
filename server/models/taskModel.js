const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Title is required"],
    },
    category: {
        type: String,
        enum: [
            "Courier Service",
            "Repair of Digital Devices",
            "Design",
            "Event and Promotions",
            "Software Development",
            "Installation",
            "Cargo Transportation",
            "Cleaning and Household",
            "Transport Repair",
            "Photo Video Audio",
            "Repair and Construction",
            "Computer",
            "Virtual Assistant",
            "Beauty and Health",
            "Tutors and Training"
        ],
        required: [true, "Category is required"]
    },
    isRemote: {
        type: Boolean,
        default: false
    },
    location: {
        // GeoJSON
        type: {
            type: String,
            default: "Point",
            enum: ["Point"]
        },
        coordinates: [Number],
        zipcode: { type: String },
        address: { type: String },
        city: { type: String },
        province: {
            type: String,
            enum: [
                "Alberta",
                "British Columbia",
                "Manitoba",
                "New Brunswick",
                "Newfoundland",
                "Nova Scotia",
                "Ontario",
                "Prince Edward Island",
                "Quebec",
                "Saskatchewan"
            ]
        },
    },
    startDate: {
        type: Date,
        default: Date.now(),
    },
    endDate: {
        type: Date,
        default: Date.now(),
    },
    paymentMethod: {
        type: String,
        enum: [
            "in-person",
            "e-transfer"
        ],
        required: [true, "Payment method is required"]
    },
    details: {
        type: String,
        required: [true, "Please enter the details of task"]
    },
    budget: {
        type: Number,
        required: [true, "Amount is required"],
        validate(value) {
            if (value < 0.0) {
                throw new Error("Negative amount is not allowed")
            }
        }
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        match: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        validate: {
            validator: function (num) {
                return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(num);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    uploadedUser: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    assignedUser: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

taskSchema.index({ title: "text" })

module.exports = mongoose.model("Task", taskSchema);