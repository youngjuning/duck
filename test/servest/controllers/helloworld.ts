import { ServerRequest } from "https://servestjs.org/@v1.1.1/mod.ts";

export const name = "helloworld";
export const method = "get";

export default async (req: ServerRequest) => {
  await req.respond({
    status: 200,
    body: "Hello World!",
  })
};
