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
            jest.spyOn(Chat.prototype, 'save').mockResolvedValue(MOCK_CHAT)

            const newChat = await ChatService.createChat(MOCK_CHAT.title, MOCK_CHAT.userId);
            
            expect(newChat).toEqual(MOCK_CHAT)
        });
    })
    describe('Chat Service - getAllChatsByUserId', () => {
        it('should return chats successfully', async () => {
            jest.spyOn(Chat, 'find').mockResolvedValue(MOCK_CHAT_LIST);

            const chats = await ChatService.getAllChatsByUserId(MOCK_CHAT_LIST[0].userId);
            expect(chats).toEqual(MOCK_CHAT_LIST)
        })
    })
    describe('Chat Service - getChatById', () => {
        it('should return chat successfully', async () => {
            jest.spyOn(Chat, 'findById').mockResolvedValue(MOCK_CHAT);
            const chat = await ChatService.getChatById(MOCK_CHAT._id);
            expect(chat).toEqual(MOCK_CHAT);
        })
    })
})