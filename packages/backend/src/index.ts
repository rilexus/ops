import express from "express";
import { PORT } from "./env";

const app = express();

const port = PORT;

app.get("/", (req: any, res: any) => {
  res.send("Hello World.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
