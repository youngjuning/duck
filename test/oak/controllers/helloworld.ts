import { Context } from "https://deno.land/x/oak/mod.ts";
export const name = "helloworld";
export const method = "get";

export default async (ctx: Context) => {
  const { response } = ctx;
  response.body = "hello world!";
};
