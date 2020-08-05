export function addControllers(router: any, dir: string = 'controllers') {
    console.log(Deno.realPathSync(dir));
}
