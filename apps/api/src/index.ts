import { networkInterfaces } from "os";
import { app } from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`
  🚀 API running at:

  ➜  Local:   http://localhost:${PORT}
  ➜  Network: http://${getLocalIP()}:${PORT}

  🕒 Press CTRL+C to stop
  `);
});

function getLocalIP(): string {
  const nets = networkInterfaces();
  for (const net of Object.values(nets).flat()) {
    if (net && net.family === "IPv4" && !net.internal) {
      return net.address;
    }
  }
  return "localhost";
}
