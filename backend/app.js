import express from "express";
import route from "./routes/route.js";
import { connectDB } from "./db.js";
import cors from "cors";


const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", route);

connectDB();

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
