const io = require('socket.io')(5100, {
	cors: {
		origin: 'http://localhost:3000',
	},
});

io.on("connection", (socket) => {
    // When user connects
    console.log("a user connected.")
})
