const express = require("express");
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
  });
const adminController = require("../controllers/adminController")

router.post("/create", adminController.createAdmin);
router.post("/login", adminController.login);
router.post("/files/:uid", upload.single('file'), adminController.uploadFile)
router.get("/files/:uid", adminController.getFiles)
router.get("/files/:uid/:fid", adminController.downloadFiles)
router.put("/files/:uid", adminController.deleteAllFiles)

module.exports = router;