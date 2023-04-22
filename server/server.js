const socket = require("socket.io");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config({ path: `${__dirname}/config.env` });
const app = require(`${__dirname}/app`);

// DB Connection
const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);
mongoose.set('strictQuery', true); // for suppressing the deprecation warning
mongoose.connect(DB).then(() => {
    console.log("DB has been successfully connected");
});

// Request listening
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
});

const io = socket(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

const chatController = require("./controllers/socketController");

io.on("connection", chatController.connection);