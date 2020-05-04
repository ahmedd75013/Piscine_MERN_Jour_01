let http = require('http')
let fs = require('fs')

let url=require('url')

let server = http.createServer()
server.on ('request' ,(request , reponse)=>{

    reponse.writeHead(200)
   let query = url.parse(request.url, true).query

   let name = query.name === undefind ? 'anonyme' :query.name
   fs.readFile('./index.html' ,'utf8' ,(err,data) =>{
       if(err){
           reponse.writeHead(404)
           reponse.end("ce fichier n'exite pas")

       }else{
           reponse.writeHead(200 ,{
               'Content-type':'text/html; charset =utf-8'
           })

           data =data.replace('{{ name}}', name)
           reponse.end(data)
       }
   })
  

})
console.log('done')
server.listen(4242);
