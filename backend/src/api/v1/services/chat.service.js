import Chat from "../../../models/chat";

class ChatService {
  async createChat(title, userId) {
    try {
      const newChat = new Chat({ title, userId});
      await newChat.save();
      return newChat
    } catch (error) {
      throw error;
    }
  }
  async getAllChatsByUserId(userId) {
    try {
      const chats = await Chat.find({ userId: userId });
      return chats
    } catch (error) {
      throw error;
    }
  }
  async getChatById(chatId) {
    try {
      const chat = await Chat.findById(chatId);
      return chat
    } catch (error) {
      throw error;
    }
  }
  async deleteChatById(chatId) {
    try {
      await Chat.findByIdAndDelete(chatId);
    } catch (error) {
      throw error;
    }
  }
}

export default new ChatService();
