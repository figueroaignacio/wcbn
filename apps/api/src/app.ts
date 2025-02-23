// express
import express, { Request, Response } from "express";

// Routes
import challengeRouter from "./routes/challenge.route";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(`
      <h1>Hello from the express API</h1>
      <p>Yes, it works (At least for now xd...)</p>
      <p>Need help? Just yell: <code>CTRL + C</code> and try again.</p>
    `);
});

app.use("/api/challenges", challengeRouter);

export { app };
