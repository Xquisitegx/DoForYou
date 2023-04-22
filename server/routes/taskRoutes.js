const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController")

router.post("/create", taskController.createTask);
router.post("/edit/:taskId", taskController.editTask);
router.get("/:tid", taskController.getTaskById);
router.post("/assignPerformer", taskController.assignPerformer);

router
    .route('/')
    .get(taskController.getAllTasks);
router.get("/getCreatedTasks/:userId", taskController.getCreatedTasks);
router.get("/getAssignedTasks/:userId", taskController.getAssignedTasks);

router.post("/setTaskCompleted/:taskId", taskController.setTaskCompleted);

router.delete("/delete/:taskId", taskController.deleteTask)

module.exports = router;