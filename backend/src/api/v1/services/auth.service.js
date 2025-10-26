import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../../../config/firebase.config.js";
import UserService from "./user.service.js";
import redis from "../../../../config/redis.js";
import admin from "firebase-admin";

const auth = getAuth(app);

class AuthService {
  async userSignUp(name, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await UserService.createUser(name, email);
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
      await redis.set(`idToken:`, idToken, "EX", 3600);
      return { user: userCredential.user, idToken };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserFromSession() {
    const idToken = await redis.get(`idToken:`);
    if (!idToken) {
      throw new Error("Session expired or not found");
    }
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const email = decodedToken.email;
    const userId = (await UserService.getUserByEmail(email))._id;
    return { userId };
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
