// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { protectedExampleRouter } from "./protected-example-router";
import { roomRouter } from "./room";
import { sessionRouter } from "./session";
import { userRouter } from "./user";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("room.", roomRouter)
  .merge("user.", userRouter)
  .merge("session.", sessionRouter)
  .merge("question.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
