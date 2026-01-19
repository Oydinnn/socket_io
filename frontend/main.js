const socket = io("http://localhost:4545")

socket.on("connect", () =>{
  console.log("Backendga ulandi");
})

btn.addEventListener("click", ()=>{
  socket.emit("message", textInput.value)
})


socket.on("new message", data =>{
  list.innerHTML  += `<li>${data}</li>`
})