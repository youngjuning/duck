import { Context } from "https://deno.land/x/abc@v1/mod.ts";

export const name = "helloworld";
export const method = "get";

export default async (ctx: Context) => {
  return 'Hello World!'
};
