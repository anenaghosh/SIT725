const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("A client connected:", socket.id);

    // Send message to client
    socket.emit('serverMessage', 'Hello from server!');

    // Listen to messages from client
    socket.on('clientMessage', (data) => {
        console.log("Received from client:", data);
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
