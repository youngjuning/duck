export default async function addAbcControllers(router: any, dir: string) {
  const realPath = Deno.realPathSync(dir);
  router.get("/", (ctx: any) => {
    return "Hello Duck!";
  }).get("/checkHealth", (ctx: any) => {
    return "The server is health. Just do it.";
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
  return router
}
