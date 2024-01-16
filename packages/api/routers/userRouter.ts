import { procedure, router } from "../utils";

export const userRouter = router({
  getAll: procedure
    .meta({ description: "Fetches all users from database" })
    .query(() => {
      return { data: [] };
    }),
});
