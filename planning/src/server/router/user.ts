import { randomUUID } from "crypto";
import { z } from "zod";
import { createRouter } from "./context";

export const userRouter = createRouter()
  .mutation("create", {
    async resolve({ ctx: { prisma } }) {
        return prisma.user.create({ data: { name: 'Guest' }});
    },
  })
  .mutation("startSession", {
    input: z
      .object({
        id: z.string().nullable(),
        roomId: z.string().nullable(),
      }),
    async resolve({ input, ctx: { prisma } }) {
      if (!input.id) {
        const guest = await prisma.user.create({ data: { name: 'Guest' }});

        input.id = guest.id;
      }

      const session = await prisma.session.findFirst({ where: { userId: input.id, roomId: input.roomId }, include: { user: true }});

      if (session) return session;

      let expiryDate = new Date();

      // Set it to one month after today
      expiryDate.setMonth(expiryDate.getMonth() + 1);

      // Zero the time component
      expiryDate.setHours(0, 0, 0, 0);
      
      return prisma.session.create({ data: { userId: input.id, roomId: input.roomId, sessionToken: randomUUID(), expires: expiryDate }, include: { user: true } });
    },
  });
