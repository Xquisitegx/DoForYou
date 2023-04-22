const Admin = require("../models/adminModel");
const File = require('../models/fileModel');
const mime = require('mime-types');

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");


// Create new admin
exports.createAdmin = catchAsync(async (req, res) => {
    const admin = await Admin.create(req.body);

    res.status(201).json({
        status: "success",
        results: admin.length,
        admin
    });
});

// Login admin
exports.login = catchAsync(async (req, res) => {

    const admin = await Admin.findOne({ username: req.body.username, password: req.body.password })

    res.status(200).json({
        status: "success",
        results: admin.length,
        admin
    });
});

// upload file
exports.uploadFile = catchAsync(async (req, res) => {
    const userId = req.params.uid;
    const file = req.file;

    const newFile = new File({
        name: file.originalname,
        size: file.size,
        userId: userId,
        data: file.buffer,
        contentType: file.mimetype
    });

    const result = await newFile.save();

    res.json(result);
})

exports.getFiles = catchAsync(async (req, res) => {
    const userId = req.params.uid;
    const files = await File.find({ userId }).exec();
    res.json(files);
})

exports.downloadFiles = catchAsync(async (req, res) => {
    const fileId = req.params.fid;

    const file = await File.findById(fileId).exec();

    if (!file) {
        return res.status(404).send('File not found');
    }

    const contentType = file.contentType || mime.lookup(file.name); // Use the contentType property from the database if available

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${file.name}"`);
    res.send(file.data); // Send the file data directly instead of reading from a file path
});


exports.deleteAllFiles = catchAsync(async (req, res, next) => {
    const userId = req.params.uid;

    File.deleteMany({ userId: userId })
        .then(result => {
            res.send("All files been deleted")
        })
        .catch(err => {
            console.error(err);
        });
});

