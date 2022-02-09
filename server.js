const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
  console.log('啊哈哈哈哈哈');
}).listen(80,()=>{
  console.log('服务器创建成功!');
})
