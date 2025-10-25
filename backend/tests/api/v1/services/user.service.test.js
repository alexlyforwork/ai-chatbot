import userService from "../../../../src/api/v1/services/user.service";
import { jest } from "@jest/globals";
import User from "../../../../src/models/user";
import { expect } from "@jest/globals";
import { MOCK_USER } from "../../../fixtures/mockData";

describe('User Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('User Service - createUser', () => {
        it('should create user successfully', async () => {
            jest.spyOn(userService, 'getUserByEmail').mockResolvedValue(false);
           
            jest.spyOn(User.prototype, 'save').mockResolvedValue(MOCK_USER);

            const newUser = await userService.createUser(MOCK_USER.name,MOCK_USER.email);
            expect(newUser).toEqual(expect.objectContaining({
                name: MOCK_USER.name,
                email: MOCK_USER.email
            }));
            expect(userService.getUserByEmail).toHaveBeenCalledWith(MOCK_USER.email);
        });

        it('should throw error if user already exists', async () => {
            jest.spyOn(userService, 'getUserByEmail').mockResolvedValue({name: MOCK_USER.name, email: MOCK_USER.email});
           
            await expect(userService.createUser(MOCK_USER.name,MOCK_USER.email))
                .rejects
                .toThrow('User already exists');
            expect(userService.getUserByEmail).toHaveBeenCalledWith(MOCK_USER.email);
        })


    })
})