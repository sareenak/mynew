var express=require("express")
var app=express()
var http=require("http").createServer(app)
var io=require("socket.io")(http)

app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/public/noticeboard.html");
})
app.get("/admin",(req,res)=>{
	res.sendFile(__dirname+"/public/admin.html");
})

http.listen(3000,()=>{
	console.log("connected to serve");
})
io.on("connection established",(socket)=>{
	console.log("new connection established");
	
})
