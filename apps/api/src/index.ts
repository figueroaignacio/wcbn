import dotenv from "dotenv";
dotenv.config();

import { App } from "./app";

const PORT = process.env.PORT || 3001;

const server = new App();

server.listen(PORT, () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});
