const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


//middle

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New user connected');

    //socket.emit from admin text welcome to chat app
    socket.emit('newMessage',{
        from:'Admin',
        text: 'Welcome to chat app'
    });

    //sockect.broadcast.emit from admin text new user joined
    socket.broadcast.emit('newMessage',{
        from: 'Admin',
        text: 'New User joined',
        createAt: new Date().getTime()
    });


    socket.on('createMessage', (message) => {
        console.log('message', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
        //
        // socket.broadcast.emit('newMessage',{
        //     from: message.from,
        //     text: message.text,
        //     createAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});