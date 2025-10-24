
class AIService {
    // Get AI response based on the message
    async getAIResponse(msg) {
        const mockResponse = [
            'Hi there',
            'Hello World',
        ]
        const reply = mockResponse[Math.floor(Math.random() * mockResponse.length)];
        console.log(reply)
        return reply;
    }
}

export default new AIService();