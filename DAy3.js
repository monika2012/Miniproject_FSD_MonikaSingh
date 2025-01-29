const http= require("http");
const server=http.createServer(async (req, res)=>{
    if(req.url=="/"){
        res.write(`<html>
            <style>
            body{background:red;}
            </style>
            <h1>HELLO</h1></html>`);
    }
    else if(req.url=="/about"){
        res.write(`<html>
            <style>
            body{background:yello;}
            </style>
            <h1>Monika Singh</h1></html>`);

    }
    else{
        res.write(`<html>
            <style>
            body{background:pink;}
            </style>
            <h1>error</h1></html>`);
    }
});
server.listen(1100);