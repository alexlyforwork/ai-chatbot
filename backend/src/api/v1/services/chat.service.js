import Chat from "../../../models/chat";

class ChatService {
  async createChat(title, userId) {
    try {
      const newChat = new Chat({ title, userId });
      await newChat.save();
      return { status: 'SUCCESS', data: newChat };
    } catch (error) {
      throw error;
    }
  }
  async getAllChatsByUserId(userId) {
    try {
      const chats = await Chat.find({ userId: userId });
      return { status: 'SUCCESS', data: chats };
    } catch (error) {
      throw error;
    }
  }
  async deleteChatById(chatId) {
    try {
      await Chat.findByIdAndDelete(chatId);
      return { status: 'SUCCESS' };
    } catch (error) {
      throw error;
    }
  }
}

export default new ChatService();
