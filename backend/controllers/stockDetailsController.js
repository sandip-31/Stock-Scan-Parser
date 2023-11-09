import { stockDetails } from "../models/stockDetails.js";

export const getStockDetails = async (req, res) => {
  try {
    const data = await stockDetails.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
