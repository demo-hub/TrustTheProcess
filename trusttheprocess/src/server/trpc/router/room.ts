import { z } from "zod";

import { publicProcedure, router } from "../trpc";

export const roomRouter = router({
  createRoom: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.room.create({
        data: {
          name: input.name,
        },
      });
    }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      // Return room by id
      return ctx.prisma.room.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
