import { Application } from "https://deno.land/x/abc@v1/mod.ts";
// import duck from '../../mod.ts'
import duck from "https://deno.land/x/duck/mod.ts";
const app = new Application();
const gaga = await duck(app)
gaga.start({ port: 1998 });

console.log(`🦕 abc server running at http://127.0.0.1:1998/ 🦕`);
