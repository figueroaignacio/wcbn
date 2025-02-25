// express
import cors from "cors";
import express, { Request, Response } from "express";

// Routes
import challengeRouter from "./routes/challenge.route";

const allowedOrigin = process.env.CLIENT_ORIGINS;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "DELETE", "UPDATE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send(`
      <h1>Hello from the express API</h1>
      <p>Yes, it works (At least for now xd...)</p>
      <p>Need help? Just yell: <code>CTRL + C</code> and try again.</p>
    `);
});

app.use("/api/challenges", challengeRouter);

export { app };
