const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Check file type
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/images/profile');
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    const filePath = path.join('../client/public/images/profile', `user-${req.params.uid}.png`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    cb(null, `user-${req.params.uid}.png`);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
