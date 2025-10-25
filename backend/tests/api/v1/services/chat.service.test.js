import ChatService from '../../../../src/api/v1/services/chat.service.js';
import { beforeEach, expect, jest } from "@jest/globals";
import Chat from '../../../../src/models/chat.js';
import { MOCK_CHAT_LIST, MOCK_CHAT } from '../../../fixtures/mockData.js';

describe('Chat Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('Chat Service - createChat', () => {
        it('should create chat successfully', async () => {
            jest.spyOn(Chat.prototype, 'save').mockResolvedValue({
                title: MOCK_CHAT.title,
                userId: MOCK_CHAT.userId
            });

            const newChat = await ChatService.createChat(MOCK_CHAT.title, MOCK_CHAT.userId);
            const { title, userId } = newChat.data;

           expect(title).toBe(MOCK_CHAT.title);
           expect(userId.toString()).toBe(MOCK_CHAT.userId);
           expect(newChat.status).toBe('SUCCESS');
        });
    })
    describe('Chat Service - getAllChatsByUserId', () => {
        it('should return chats successfully', async () => {
            jest.spyOn(Chat, 'find').mockResolvedValue(MOCK_CHAT_LIST);

            const chats = await ChatService.getAllChatsByUserId(MOCK_CHAT_LIST[0].userId);
            expect(chats.data).toMatchObject(MOCK_CHAT_LIST)
            expect(chats.status).toBe('SUCCESS');
        })
    })
    describe('Chat Service - deleteChatById', () => {
        it('should delete chat successfully', async () => {
            jest.spyOn(Chat, 'findByIdAndDelete').mockResolvedValue(status = 'SUCCESS');
            const res = await ChatService.deleteChatById(MOCK_CHAT._id);
            expect(res.status).toBe('SUCCESS');
        })
    })
})