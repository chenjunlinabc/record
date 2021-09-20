const fs = require("fs")
fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
fs.writeFile("data.txt","hallo nodejs","utf8",(err,data)=>{
    if(err){
        throw err
    }
})
    fs.appendFile("data.txt","hallo xxx" , (err)  => {
        if (err){
            return err.message
        }else{
            console.log("成功");
        }
    });


    const http = require("http")
    http.createServer((request,response)=>{
        response.write("hallo word")
        response.end()
    }).listen(8888)

    
    const http = require("http")
    const fs = require("fs")
    http.createServer((request,response)=>{
        fs.readFile(`./${request.url}`,(err,data)=>{
            if(err){
                response.writeHead(404)
                response.end("404")
            }else{
                response.writeHead(200)
                response.end(data)
            }
         })
        
        response.end()
    }).listen(8888)
