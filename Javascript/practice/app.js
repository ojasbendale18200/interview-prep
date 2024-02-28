const socket = new WebSocket("wss://functionup.fintarget.in/ws?id=fintarget-functionup.")

socket.addEventListener("open", event => {
    socket.send("Connection established")
  });
  
  // Listen for messages
  socket.addEventListener("message", event => {
    console.log("Message from server ", event.data)
  });