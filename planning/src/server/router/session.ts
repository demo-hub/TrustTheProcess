import { z } from "zod";
import { createRouter } from "./context";

export const sessionRouter = createRouter()
.query("getRoomSessions", {
    input: z.object({ roomId: z.string() }),
    async resolve({ input, ctx: { prisma } }) {
      return prisma.session.findMany({ where: { roomId: input.roomId } });
    }
  });
