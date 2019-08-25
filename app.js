const koa = require('koa');
const json = require('koa-json');
const koaRouter = require('koa-router');
const app = new koa();
const router = new koaRouter();
const koaBody = require("koa-body");

app.use(json());
//app.use(async ctx => ( ctx.body = {"name":"Zenitsu"}));

router.get("/test",ctx =>(ctx.body = "hello test"));
router.post("/upload",async ctx=>{
    const file  = ctx.request.files.file;
    console.log(file);
});

app
.use(router.routes())
.use(koaBody({ multipart: true }))
.use(router.allowedMethods())

app.listen(3000,()=> console.log('Server started...'));