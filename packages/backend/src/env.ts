import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const PORT = process.env.BACKEND_PORT;

export { PORT };
