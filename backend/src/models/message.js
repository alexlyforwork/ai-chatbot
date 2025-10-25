import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sendAt: { type: Date, default: Date.now },
  content: { type: String, required: true },
});

export default mongoose.model("message", MessageSchema);
