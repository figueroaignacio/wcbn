import cors from "cors";
import express, { Application, Request, Response } from "express";
import challengeRouter from "./routes/challenge.route";

export class App {
  private app: Application;
  private readonly allowedOrigin = process.env.CLIENT_ORIGINS;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: this.allowedOrigin || "http://localhost:5173",
        methods: ["GET", "POST", "DELETE", "UPDATE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
  }

  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send(`
        <h1>Hello from the express API</h1>
        <p>Yes, it works (At least for now xd...)</p>
        <p>Need help? Just yell: <code>CTRL + C</code> and try again.</p>
      `);
    });

    this.app.use("/api/challenges", challengeRouter);
  }

  public listen(PORT: string | number, callback: () => void) {
    this.app.listen(PORT, callback);
  }
}
