import MessageService from "../services/message.service.js";

class MessageController {
  async getMessagesByChatId(req, res) {
    try {
      const { chatId } = req.body;
      const messages = await MessageService.getMessagesByChatId(chatId);
      res.status(200).json({ messages: messages });
    } catch (error) {
      res.status(500).json({ error: "Failed to get messages" });
    }
  }
  async saveMessage(req, res) {
    try {
      const { role, chatId, message } = req.body;
      const savedMessage = await MessageService.saveMessage(
        role,
        chatId,
        message,
      );
      res.status(200).json({ message: savedMessage });
    } catch (error) {
      res.status(500).json({ error: "Failed to save message" });
    }
  }
}

export default new MessageController();
