import mongoose from "mongoose";
import chalk from "chalk";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/thesmiths_db"

mongoose.set("returnOriginal", false);

mongoose
  .connect(url, mongooseConfig)
  .catch((err) => {
    console.log(`Error connection go MongoDB: ${err.message}`);
  });

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;