import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const password = encodeURIComponent("Sandip31");
    const connection = await mongoose.connect(
      `mongodb+srv://Sandip31:${password}@cluster0.mdbxsfu.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
  }
};
// mongodb+srv://Sandip31:${password}@cluster0.mdbxsfu.mongodb.net/
