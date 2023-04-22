const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    size: Number,
    userId: String,
    data: Buffer, // Store the file data directly in the database
    contentType: String // Store the content type of the file
});

module.exports = mongoose.model('File', fileSchema);