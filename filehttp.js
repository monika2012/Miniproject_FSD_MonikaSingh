const http= require("http");
const server=http.createServer(async (req, res)=>{
   // console.log(req);

    console.log("-->",req.url);
    const fetchResponse= await fetch("https://dummyjson.com/products/1");
    const data=fetchResponse.json();
    const {products}=data;
    res.write(`<html>
        <style>
        body{background:red;}
        </style>
        <h1>HELLO</h1></html>`);

    res.setHeader("content-type","text/html");
    res.end("<h1>hello</h1>");
});
server.listen(1100);