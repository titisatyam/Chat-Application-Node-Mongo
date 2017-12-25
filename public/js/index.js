var socket = io();
socket.on('connect',function() {
    console.log('connected to server');


});

socket.on('Disconnect',() => {
    console.log('Disconnect from server');
});

socket.on('newMessage',function(message){
    console.log('new Message',message);
});

