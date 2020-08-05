# duck

<img src="https://i.loli.net/2020/08/05/XBzRTIeoSnQc5vH.png" width="150"/>

A simple controller scanner and router register for deno!

## API

> duck(router, controller_dir: string = 'controllers')

## Usage

### oak

```ts
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import duck from "https://deno.land/x/duck/mod.ts";

const app = new Application();
const router = new Router();
const gaga = await duck(router);

app.use(gaga.routes());
app.use(gaga.allowedMethods());

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

### servest

```ts
import { createApp } from "https://servestjs.org/@v1.1.1/mod.ts";
import duck from "https://deno.land/x/duck/mod.ts";

const app = createApp();

const gaga = await duck(app);
gaga.listen({ port: 1998 });

console.log(`🦕 servest server running at http://127.0.0.1:1998/ 🦕`);
```

Your controllers just like: `controllers/helloworld.ts`:

```ts
import { ServerRequest } from "https://servestjs.org/@v1.1.1/mod.ts";

export const name = "helloworld";
export const method = "get";

export default async (req: ServerRequest) => {
  await req.respond({
    status: 200,
    body: "Hello World!",
  })
};
```


### abc

```ts
import { Application } from "https://deno.land/x/abc@v1/mod.ts";
import duck from "https://deno.land/x/duck/mod.ts";
const app = new Application();
const gaga = await duck(app);

gaga.start({ port: 1998 });

console.log(`🦕 abc server running at http://127.0.0.1:1998/ 🦕`);
```

Your controllers just like: `controllers/helloworld.ts`:

```ts
import { Context } from "https://deno.land/x/abc@v1/mod.ts";

export const name = "helloworld";
export const method = "get";

export default async (ctx: Context) => {
  return 'Hello World!'
};
```
