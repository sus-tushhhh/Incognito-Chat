import express from "express";
import "dotenv/config";
import http from "http";
import { Server } from "socket.io";
import messageRoutes from "./routes/messageRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = process.env.PORT || 3000;

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/messages", messageRoutes);
app.use("/api/room", roomRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.sendFile("/public/index.html");
});

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
