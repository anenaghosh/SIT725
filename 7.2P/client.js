const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("Connected to server:", socket.id);
    socket.emit('clientMessage', 'Hello Server, I am Client!');
});

socket.on("serverMessage", (data) => {
    console.log("Received from server:", data);
});

socket.on("disconnect", () => {
    console.log("Disconnected from server");
});
