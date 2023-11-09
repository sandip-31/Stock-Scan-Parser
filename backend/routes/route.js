import express from "express";
import { getStockDetails } from "../controllers/stockDetailsController.js";


const router = express.Router();

router.get("/stockdetails", getStockDetails);


export default router;
