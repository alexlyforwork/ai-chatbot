import Message from "../../../models/message";

class MessageService {
  async getMessagesByChatId (chatId) {
    try {
        const messages = await Message.find({chatId: chatId})
        return messages;
    } catch (error) {
        throw error;
    }
  }
  async saveMessage (message) {
    try {
      const newMessage = new Message(message);
      await newMessage.save();
      return newMessage;
    } catch (error) {
      throw error;
    }
  }
}

export default new MessageService();
