const cors = require("cors");
const express = require("express");
const morgan = require("morgan"); // for logging purpose
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Middlewares
if (process.env.NODE_DEV == "development") {
    app.use(morgan("dev")); // for logging purpose
}
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");
const roomRouter = require("./routes/roomRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const adminRouter = require("./routes/adminRoutes");
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/chat/rooms", roomRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/admin", adminRouter);


const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// Exception Handler for uncaught errors
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server..`, 404));
});
// Global Exception Handler
app.use(globalErrorHandler);

module.exports = app;