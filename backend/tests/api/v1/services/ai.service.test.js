import AIService from '../../../../src/api/v1/services/ai.service.js';

describe('AI Service', () => {
    describe('AI Service - getAIResponse', () => {
        it('should return a valid AI response', async () => {
            const message = 'Hello';
            const response = await AIService.getAIResponse(message);
            const validResponses = ['Hi there', 'Hello World'];
            expect(validResponses).toContain(response);
        });
    });
})