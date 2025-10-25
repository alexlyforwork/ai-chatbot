import mongoose from "mongoose";

const chatId1 = new mongoose.Types.ObjectId();
const chatId2 = new mongoose.Types.ObjectId();
const chatId3 = new mongoose.Types.ObjectId();
const userId1 = new mongoose.Types.ObjectId();
const userId2 = new mongoose.Types.ObjectId();

export const MOCK_CHAT_LIST = [
  {
    _id: chatId1,
    title: "AI Development Discussion",
    userId: "671a9c9b9876543210dcba01",
    createdAt: "2025-10-24T20:15:30.000Z"
  },
  {
    _id: chatId2,
    title: "Weekend Plans Chat",
    userId: "671a9c9b9876543210dcba02",
    createdAt: "2025-10-23T14:05:10.000Z"
  },
  {
    _id: chatId3,
    title: "Team Project Brainstorm",
    userId: "671a9c9b9876543210dcba01",
    createdAt: "2025-10-22T09:48:00.000Z"
  }
]

export const MOCK_USER = {
  _id: userId1,
  name: "Alex Ly",
  email: "alexly@example.com"
}

export const MOCK_CHAT = {
    _id: chatId1,
    title: "Team Project Brainstorm",
    userId: userId1,
    createdAt: "2025-10-22T09:48:00.000Z"
  }


export const MOCK_MESSAGES = [
  {
    _id: new mongoose.Types.ObjectId(),
    chatId: chatId1,
    userId: userId1,
    sendAt: new Date("2025-10-25T10:00:00Z"),
    content: "Hello! How are you?"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    chatId: chatId1,
    userId: userId2,
    sendAt: new Date("2025-10-25T10:01:00Z"),
    content: "I'm good, thanks! And you?"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    chatId: chatId2,
    userId: userId1,
    sendAt: new Date("2025-10-25T11:00:00Z"),
    content: "Hey, are we meeting today?"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    chatId: chatId2,
    userId: userId2,
    sendAt: new Date("2025-10-25T11:05:00Z"),
    content: "Yes! See you at 3 PM."
  }
];