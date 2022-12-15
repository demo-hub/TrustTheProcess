import { type NextApiRequest } from "next";
import { Server } from "socket.io";

const socket = async (req: NextApiRequest, res: any) => {
  if (res.socket?.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
  }
  res.end();
};

export default socket;
