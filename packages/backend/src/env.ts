import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const PORT = process.env.BACKEND_PORT || 8080;

export { PORT };
