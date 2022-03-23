import * as process from "process";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const API = process.env.API as string;

export { API };
