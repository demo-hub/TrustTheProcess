import { createRouter } from "./context";
import { z } from "zod";

export const roomRouter = createRouter()
  .mutation("create", {
    input: z
      .object({
        name: z.string(),
        sequence: z.string(),
      }),
    async resolve({ input, ctx: { prisma } }) {
      return await prisma.room.create({ data: input });
    },
  })
  .query("getById", {
    input: z.object({ id: z.string() }),
    async resolve({ input, ctx: { prisma } }) {
      return await prisma.room.findUnique({ where: input });
    }
  });
