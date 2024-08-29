import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://kanishka:kanishka23@cluster0.vw2fw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(url);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw new Error("Database connection failed");
  }
};

export default connectToDB;
