import { z } from "zod";
import { createRouter } from "./context";

export const roomRouter = createRouter()
  .mutation("create", {
    input: z
      .object({
        name: z.string(),
        sequence: z.string(),
        ownerId: z.string().nullable()
      }),
    async resolve({ input, ctx: { prisma } }) {
      if (!input.ownerId) {
        const guest = await prisma.user.create({ data: { name: 'Guest' }});

        input.ownerId = guest.id;
      }
      
      return prisma.room.create({ data: input });
    },
  })
  .query("getById", {
    input: z.object({ id: z.string() }),
    async resolve({ input, ctx: { prisma } }) {
      return prisma.room.findUnique({ where: input });
    }
  });
