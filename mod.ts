export function addControllers(router: any, dir: string = 'controllers') {
    const files = [...Deno.readDirSync(dir)] // 将 Iterator 类型转成数组
    console.log(files)
}
