import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://kanishka:kanishka@23@cluster0.qzauw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection successful"))
    .catch((e) => console.log(e));
};
export default connectToDB;
