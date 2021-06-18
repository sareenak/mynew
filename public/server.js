var express=require("express")
var app=express()
var http=require("http").createServer(app)
var io=require("socket.io")(http)

app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/websocket/noticeboard.html");
})