import { randomUUID } from "crypto";
import { adjectives, animals, Config, uniqueNamesGenerator } from "unique-names-generator";
import { z } from "zod";
import { createRouter } from "./context";

const generateRandomName = () => {
  const nameConfig: Config = {
    dictionaries: [adjectives, animals],
    separator: ' ',
    length: 2,
  }

  return uniqueNamesGenerator(nameConfig);
}

export const userRouter = createRouter()
  .mutation("create", {
    async resolve({ ctx: { prisma } }) {
      const randomName: string = generateRandomName();

      return prisma.user.create({ data: { name: randomName }});
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
        const randomName: string = generateRandomName();

        const guest = await prisma.user.create({ data: { name: randomName }});

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
