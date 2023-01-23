// Query Dom
import socket from '/socket.mjs';

const message = document.getElementById('message'),
 handle = document.getElementById('handle'),
 btn = document.getElementById('send'),
 output = document.getElementById('output'),
 feedback = document.getElementById('feedback');
// Emit Events

btn.onclick = () => {
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
};

// Listen for events

socket.on('chat', ({message,handle}) => {
    output.innerHTML += `<p><strong>
    ${handle}</strong><em>
    ${message}</em></p>`
})
message.addEventListener('keypress',function(e) {
    socket.emit('typing',handle.value);
    if(!this.timer) this.timer = setTimeout(() => {socket.emit('typing',null);this.timer =undefined;},500);
});


socket.on('typing', handle => {
    console.log(handle);
    feedback.innerHTML = handle ? `<p><em>${handle}</em> is typing ..</p>`: '';
})
