let http = require('http');
let users = [
  {id:1,name:'xjm1'},
  {id:2,name:'xjm2'}
]

let server = http.createServer(function(req, res){
  res.setHeader('Access-Control-Allow-Origin','*')
  if(req.url === '/api/users'){
    res.end(JSON.stringify(users))
  } else {
    res.end('Not Found')
  }
});
server.listen(3000, ()=>{
  console.log('扫描api接口服务器已经启动在3000端口')
})