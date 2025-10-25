import MessageService from "@/api/v1/services/message.service";
import Message from "@/models/message";
import { jest } from "@jest/globals";
import { MOCK_MESSAGES } from "../../../fixtures/mockData";

describe('Message Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('Message Service - getMessagesByChatId', () => {
        it('should return messages successfully', async () => {
            jest.spyOn(Message, 'find').mockResolvedValue(MOCK_MESSAGES);

            const messages = await MessageService.getMessagesByChatId(MOCK_MESSAGES[0].chatId)

            expect(messages).toEqual(MOCK_MESSAGES)
            
        });
    })
})