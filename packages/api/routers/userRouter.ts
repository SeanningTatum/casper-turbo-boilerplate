import { procedure, router } from "../utils";

export const userRouter = router({
  getAll: procedure.query(() => {
    return { data: [] };
  }),
});
