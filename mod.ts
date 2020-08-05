// Copyright 1994-2020 the Duck authors. All rights reserved. MIT license.
export async function addControllers(router: any, dir: string = "controllers") {
  const realPath = Deno.realPathSync(dir);
  router.get("/", (ctx: any) => {
    ctx.response.body = "Hello Duck!";
  }).get("/checkHealth", (ctx: any) => {
    ctx.response.body = "The server is health. Just do it.";
  });
  for (const dirEntry of Deno.readDirSync(dir)) {
    if (dirEntry.name.endsWith(".ts") || dirEntry.name.endsWith(".js")) {
      const controller = await import(`file://${realPath}/${dirEntry.name}`);
      const method = controller.method || "get";
      const api = controller.api ||
      dirEntry.name.replace(/(.*\/)*([^.]+).*/ig, "$2");
      router[method](`/${api}`, controller.default);
    }
  }
  return router;
}

export default async function (router: any, dir: string = "controllers") {
  const duck = await addControllers(router, dir);
  return duck;
}
