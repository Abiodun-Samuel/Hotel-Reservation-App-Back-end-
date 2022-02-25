import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    name: String,
    slug: String,
    type: String,
    price: Number,
    capacity: Number,
    size: Number,
    pets: { type: Boolean, default: false },
    breakfast: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    booked: { type: Boolean, default: false },
    description: String,
    extras: [String],
    image: String,
    bookedAt: { type: Date },
    bookedDuration: String,
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
