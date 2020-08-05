# duck

simple dynamic router register for deno

## Api

> duck(router, controller_dir?:string)

## Usage

### oak

```ts
export { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";
import duck from "https://deno.land/x/duck/mod.ts";

const app = new Application();
const router = await duck(new Router());

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`🦕 oak server running at http://127.0.0.1:1998/ 🦕`);

await app.listen({ port: 1998 });

```

Your controllers just like: `controllers/helloworld.ts`:

```ts
import { Context } from "../deps.ts";

export const name = "helloworld";
export const method = "get";

export default async (ctx: Context) => {
  const { response } = ctx;
  response.body = "hello world!";
};
```
