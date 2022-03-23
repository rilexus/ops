import express from "express";
import { PORT } from "./env";
import {USER} from "@ops/types";
import cors from 'cors';

const app = express();

const port = PORT;

app.use(cors())

app.get("/", (req: any, res: any) => {
  const user: USER = {
    name: 'Some'
  };

  res.json(user);
});

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
