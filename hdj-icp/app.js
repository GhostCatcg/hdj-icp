const Koa = require('koa');
const app = new Koa();

// 对于任何请求，app 将调用该异步函数处理请求：
app.use(async(ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
console.log("")

app.listen(3000);