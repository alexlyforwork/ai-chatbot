import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../../../config/firebase.config.js";
import UserService from "./user.service.js";

const auth = getAuth(app);

class AuthService {
  async userSignUp(name, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await UserService.createUser(name,email)
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async userLogin(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const idToken = await userCredential.user.getIdToken();
      return {user: userCredential.user, idToken};
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async userLogout() {
    try {
      await signOut(auth);
      return { message: "Logout successful" };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new AuthService();
