import Room from "../models/roomModel.js";

//@desc get all rooms avaliable
//@route get api/rooms
//@access public
const getRooms = async (req, res) => {
  const rooms = await Room.find();
  if (rooms) {
    res.status(200).json({ status: "ok", message: rooms });
  } else {
    res.status(404).json({ status: "error", message: "Rooms not found" });
  }
};

//@desc get one room avaliable
//@route get api/rooms/:slug
//@access public
const getRoom = async (req, res) => {
  const slug = req.params.slug;
  const room = await Room.find({ slug: slug });
  if (room) {
    // res.json(room);
    res.status(200).json(room);
  } else {
    res.status(404).json({ status: "error", message: "Room not found" });
  }
};

//@desc update a room
//@route put api/rooms/:id
//@access public
const updateRoom = async (req, res) => {
  const id = req.params.id;
  const room = await Room.findById(id);
  if (room) {
    (room.booked = true), (room.bookedAt = Date.now());
    const updatedRoom = await room.save();
    const rooms = await Room.find();
    res.json(rooms);
  } else {
    res.status(404).json({ status: "error", message: "Room is not available" });
  }
};

export { getRooms, updateRoom, getRoom };
