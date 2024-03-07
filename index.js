// 引入http模块
const http = require('http');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

// 指定服务器监听的端口号
const port = 3000;

// 启动服务器并监听指定端口
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
