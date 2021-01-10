import Koa from "koa";
import KoaStatic from "koa-static";
import Router from "koa-router";
import BodyParser from "koa-bodyparser";
import path from "path";
import open from "open";

const app = new Koa();

const staticDirPath = path.join(path.resolve(), "public");
const router = new Router({ prefix: "/api" });
router
  .get("/user", async ctx => {
    ctx.body = JSON.stringify(ctx.request.query);
  })
  .post("/buffer", async (ctx, next) => {
    const req = ctx.req;
    const msg = [];
    return new Promise(resolve => {
      req.on("data", chunk => {
        if (chunk) {
          msg.push(chunk);
        }
      });
      req.on("end", () => {
        ctx.res.writeHead(200, { "Content-type": "text/plain" });
        ctx.body = new Int32Array([21, 31]);
        resolve();
      });
    });
  })
  .post("/post", async ctx => {
    ctx.body = ctx.request.body;
  });

app.use(BodyParser());
app.use(
  KoaStatic(staticDirPath, {
    extensions: ["js"]
  })
);
app.use(router.routes()).use(router.allowedMethods());

app.listen(8000, () => {
  console.log("listen on port: 8000");
  // open("http://localhost:8000", { app: "google chrome" });
});
