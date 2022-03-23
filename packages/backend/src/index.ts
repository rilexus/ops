import express from "express";
import { PORT } from "./env";
import {USER} from "@ops/types";

const app = express();

const port = PORT;

app.get("/", (req: any, res: any) => {
  const user: USER = {};

  res.send("Hello World.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
