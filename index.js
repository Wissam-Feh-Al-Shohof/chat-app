const express = require('express');
const socket = require('socket.io');
/**
 * 
 */
const app = express();

const server = app.listen(444,() => {console.log('listening on port 444')});

app.use(express.static('public'));

const io = socket(server);
io.on('connection',(s) => {
    s.on('chat',({message,handle}) => {
        io.sockets.emit('chat', {message,handle});
    });
    s.on('typing',(handle) => {
        s.broadcast.emit('typing', handle);
    });
    console.log('made socket connection',s.id);
})

