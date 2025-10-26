import Message from "../../../models/message.js";

class MessageService {
  async getMessagesByChatId(chatId) {
    try {
      const messages = await Message.find({ chatId: chatId });
      console.log(messages)
      return messages;
    } catch (error) {
      throw error;
    }
  }
  async saveMessage(role, chatId, message) {
    try {
      const newMessage = new Message({
        role: role,
        chatId: chatId,
        content: message
      });
      console.log(newMessage)
      console.log("Saving message with chatId:", chatId);
      await newMessage.save();
      return newMessage;
    } catch (error) {
      throw error;
    }
  }
}

export default new MessageService();
