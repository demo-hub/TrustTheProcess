import { type NextApiRequest } from "next";
import { Server } from "socket.io";

// Function to generate random usernames
const generateUsername = (): string => {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "wide-eyed",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "gray",
    "black",
    "white",
    "pink",
  ];
  const nouns = [
    "cat",
    "dog",
    "horse",
    "pig",
    "cow",
    "chicken",
    "duck",
    "goose",
    "sheep",
    "turkey",
    "dove",
    "raven",
    "crow",
    "sparrow",
    "robin",
    "cardinal",
    "bluejay",
    "oriole",
    "pigeon",
    "peacock",
    "canary",
    "finch",
    "sparrow",
    "meadowlark",
    "woodpecker",
    "wren",
  ];

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${adjective}-${noun}`;
};

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
                userName: generateUsername(),
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
