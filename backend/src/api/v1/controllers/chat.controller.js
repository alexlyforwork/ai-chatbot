import ChatService from "../services/chat.service.js";
import AuthService from "../services/auth.service.js";

class ChatController {
  async createChat(req,res){
    try {
        const title = req.body.title;
        const {userId} = await AuthService.getUserFromSession();
        const chatId = await ChatService.createChat(title,userId.toString())
        res.status(200).json({chatId : chatId})
    } catch (error) {
        res.status(500).json({error: "Failed to save chat"});
    }
  }
  async getChatById(req,res){
    try {
        const {chatId} = req.body;
        const chat = await ChatService.getChatById(chatId)
        res.status(200).json({chat : chat})
    }catch(error){
        res.status(500).json({error: "Failed to get chat"});
    }
  }
  async getAllChatsByUserId(req,res){
    try {
        const {userId} = req.body;
        const chat = await ChatService.getAllChatsByUserId(userId)
        res.status(200).json({chat : chat})
    }catch(error){
        res.status(500).json({error: "Failed to get chats"});
    }
  }

}

export default new ChatController();
