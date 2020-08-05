import { createApp } from "https://servestjs.org/@v1.1.1/mod.ts";
import duck from "../../mod.ts";

const app = createApp();

const gaga = await duck(app);
gaga.listen({ port: 1998 });

console.log(`🦕 servest server running at http://127.0.0.1:1998/ 🦕`);
