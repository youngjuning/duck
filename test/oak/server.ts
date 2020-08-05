import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import duck from "../../mod.ts";

const app = new Application();

const router = new Router();
const gaga = await duck(router);

app.use(gaga.routes());
app.use(gaga.allowedMethods());

console.log(`🦕 oak server running at http://127.0.0.1:1998/ 🦕`);

await app.listen({ port: 1998 });
