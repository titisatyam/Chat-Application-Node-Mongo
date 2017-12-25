var socket = io();
socket.on('connect',function() {
    console.log('connected to server');

    socket.emit('createMessage',{
        from: 'ved',
        text: 'Hey this is ved.'
    });
});

socket.on('Disconnect',() => {
    console.log('Disconnect from server');
});

socket.on('newEmail',function(email){
    console.log('new Email',email);
});

socket.on('newMessage',function(message){
    console.log('new Message',message);
});

