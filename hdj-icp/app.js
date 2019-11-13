const Koa = require('koa');
const path = require('path');
const app = new Koa();

app.use(require('koa-static')(path.join(path.resolve(__dirname, '..'),"/dist/")))
console.log("启动服务：8000端口")
app.listen(8000);