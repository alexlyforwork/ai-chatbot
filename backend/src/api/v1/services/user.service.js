import User from "../../../models/user";

class UserService {
    async createUser(name, email) {
        try {
            const checkUser = await this.checkIfUserExists(email);
            if (checkUser) {
                throw new Error('User already exists');
            }
            const newUser = new User({name, email});
            await newUser.save();
            return newUser;
        } catch (error) {
            throw error;
        }

    }
    async checkIfUserExists(email) {
        const user = await User.findOne({email : email})
        return user !== null;
    }
}

export default new UserService();