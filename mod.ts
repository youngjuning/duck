// Copyright 1994-2020 the Duck authors. All rights reserved. MIT license.
import addServestControllers from './addServestControllers.ts'
import addOakControllers from './addOakControllers.ts'
import addAbcControllers from './addAbcControllers.ts'

export default async function (router: any, dir: string = "controllers") {
  if (router.handle) {
    return  await addServestControllers(router,dir);
  } else if(router.middleware) {
    return  await addAbcControllers(router,dir);
  } else {
    return await addOakControllers(router,dir);
  }
}
