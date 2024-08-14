import mongoose, { mongo } from "mongoose";

async function connectToDatabase() {
  mongoose.connect(process.env.MONGO_URI);

  return mongoose.connection;
}

export default connectToDatabase;
