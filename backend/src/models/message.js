import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  role: {type: String, required: true},
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: "chat", required: true },
  sendAt: { type: Date, default: Date.now },
  content: { type: String, required: true },
});

export default mongoose.model("message", MessageSchema);
