import { type NextApiRequest } from "next";
import { Server } from "socket.io";

const socket = async (req: NextApiRequest, res: any) => {
  if (!res.socket?.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on(
        "room-connection",
        async (msg: { roomId: string; userId: string }) => {
          // If user is already in room, don't add them again
          const user = await prisma?.roomSessions.findFirst({
            where: {
              roomId: msg.roomId,
              userId: msg.userId,
            },
          });

          if (!user) {
            // Create session on database
            await prisma?.roomSessions.create({
              data: {
                roomId: msg.roomId,
                userId: msg.userId,
              },
            });
          }

          // Get all users in room
          const users = await prisma?.roomSessions.findMany({
            where: {
              roomId: msg.roomId,
            },
          });

          socket.broadcast.emit("update-users", users);
        }
      );

      socket.on(
        "vote",
        (msg: { roomId: string; userId: string; vote: number }) => {
          socket.broadcast.emit("update-vote", msg);
        }
      );
    });
  }

  res.end();
};

export default socket;
