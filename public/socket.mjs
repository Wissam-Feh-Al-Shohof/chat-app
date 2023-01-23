import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
      
var socket = io.connect('http://localhost:444');

export default socket;
// io().on('connect',() => console.log('Connect from client'));