const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    registeredAt: {
        type: Date,
        default: Date.now()
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Given email is in wrong format"]
    },
    password: {
        type: String,
        minlength: 8,
        select: false,
        required: [true, "Password is required"]
    },
    firstname: {
        type: String,
        required: [true, "First name is required"]
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"]
    },
    // age: {
    //     type: Number,
    //     validate: {
    //         validator: Number.isInteger,
    //         message: "Age cannot consist of letters or decimal point numbers"
    //     },
    //     required: [true, "Age is required"],
    // },
    // sex: {
    //     type: String,
    //     enum: ["Male", "Female", "Other"]
    // },
    phone: {
        type: String,

    },
    role: {
        type: String,
        lowercase: true,
        enum: ["customer", "performer"],
        default: "customer",
        required: [true, "Role is required"]
    },
    location: {
        // GeoJSON
        type: {
            type: String,
            default: "Point",
            enum: ["Point"]
        },
        coordinates: [Number],
        zipcode: {
            type: String,
            required: [true, "ZipCode is required"]
        },
        address: {
            type: String,
            required: [true, "Address is required"]
        },
        city: {
            type: String,
            required: [true, "City is required"]
        },
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
            ],
            required: [true, "Province is required"]
        },
    },
    // interesting categories as a performer
    categories: {
        type: [String],
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
        ]
    },
    description: String,
    verified: {
        type: Boolean,
        default: false
    },
    birthdate: Date,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    // Encrypting password
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.isPasswordCorrect = async function (givenPassword, userPassword) {
    return await bcrypt.compare(givenPassword, userPassword);
}

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model("User", userSchema);