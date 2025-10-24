import userService from "../../../../src/api/v1/services/user.service";
import { jest } from "@jest/globals";
import User from "../../../../src/models/user";
import { expect } from "@jest/globals";

describe('User Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('createUser', () => {
        it('should create user successfully', async () => {
            jest.spyOn(userService, 'checkIfUserExists').mockResolvedValue(false);
           
            const mockUser = {name: 'Test', email: 'test@gmail.com'}
            jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);

            const newUser = await userService.createUser('Test','test@gmail.com');
            expect(newUser).toMatchObject(mockUser);
            expect(userService.checkIfUserExists).toHaveBeenCalledWith('test@gmail.com');
        });
        it('should throw error if user already exists', async () => {
            jest.spyOn(userService, 'checkIfUserExists').mockResolvedValue(true);
           
            await expect(userService.createUser('Test','test@gmail.com'))
                .rejects
                .toThrow('User already exists');
            expect(userService.checkIfUserExists).toHaveBeenCalledWith('test@gmail.com');
        })
    })
})