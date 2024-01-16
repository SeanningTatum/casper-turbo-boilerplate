import { createCallerFactory, router } from "./utils";
import { userRouter } from "./routers/userRouter";

export const appRouter = router({
  user: userRouter,
});

const caller = createCallerFactory(appRouter);
export const serverRouter = caller({});

export type AppRouter = typeof appRouter;
