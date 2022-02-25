import mongoose from "mongoose";
import dotenv from "dotenv";
import rooms from "./data/hotelrooms.js";
import Room from "./models/roomModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const importData = async () => {
  try {
    const createdRooms = await Room.insertMany(rooms);
    console.log("Data inserted");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Room.deleteMany();
    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
