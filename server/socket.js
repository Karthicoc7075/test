const socketIO = require('socket.io');


const configureSocket = (server) => {
    const io = socketIO(server,{
        cors:{
            origin: 'http://localhost:3000',  // Allow your frontend to connect
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type'],
          }
    }); 
    

  let activeUsers = [];
    
    
    
    io.on('connection', (socket) => {
     
        socket.on('joinNewUser', (newUserId) => {
            if(!activeUsers.some(user=> user.userId === newUserId)){
                activeUsers.push({userId: newUserId, socketId: socket.id});
                console.log('activeUsers:', activeUsers);
                console.log('new user joined:', newUserId);
            }
            io.emit('activeUsers', activeUsers);
        } 
        );

        socket.on("typing", (data) => {
          const { receiverId, senderId } = data;
          const receiver = activeUsers.find((user) => user.userId === receiverId);
      console.log("Typing to: ", receiverId);
      
          if (receiver) {
            io.to(receiver.socketId).emit("typing", { senderId });
          }
        });

        socket.on("stopTyping", (data) => {
          const { receiverId, senderId } = data;
          const receiver = activeUsers.find((user) => user.userId === receiverId);
      console.log("Stop Typing to: ", receiverId);
      
          if (receiver) {
            io.to(receiver.socketId).emit("stopTyping", { senderId });
          }
        });
        
        socket.on('sendMessage', (data) => {
          const {receiverId} = data;

          const userActive = activeUsers.find(user => user.userId === receiverId);

          if(userActive){
              io.to(userActive.socketId).emit('receiveMessage', data);
          }
          });
        

        socket.on('disconnect', () => {
            activeUsers = activeUsers.filter(user => user.socketId !== socket.id);
            console.log('activeUsers:', activeUsers);
            console.log('user disconnected', socket.id);
            io.emit('activeUsers', activeUsers);
          });
      });
    return io;
}


module.exports = configureSocket; 