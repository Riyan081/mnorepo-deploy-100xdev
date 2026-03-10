import { prismaClient } from "@repo/db/client";
import { WebSocketServer } from "ws";


const ws = new WebSocketServer({ port: 3001 });

ws.on("connection",async (socket)=>{
  const res =  await prismaClient.user.create({
        data:{
            username:Math.random().toString(36).substring(2, 15),
            password:Math.random().toString(36).substring(2, 15)
        }
    })
    console.log(res);
    socket.send(`User created with username: ${res.username} and password: ${res.password}`);
     
})