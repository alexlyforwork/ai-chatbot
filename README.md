# 🤖 AI Chatbot Backend

A backend server for an AI-powered chatbot featuring **Firebase authentication**, **Redis caching**, and **MongoDB** for chat and message storage.  
Built with **Node.js**, **Express**, and **Socket.io** for real-time messaging.

---

## 🚀 Features

- 🔐 **Firebase Authentication** (JWT / ID Token verification)
- 💬 **Real-time messaging** via Socket.io
- 🧠 **AI integration** using Gemini API
- ⚡ **Redis caching** for session-based chat authorization
- 🗃️ **MongoDB** for persistent chat/message history
- 🐳 **Docker support** for full environment setup

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/alexlyforwork/ai-chatbot.git
cd backend
```

### 2️⃣ Install dependencies
```bash
pnpm install
```

### 3️⃣ Configure environment variables
Create a `.env` file in the `backend` directory:

```bash
PORT=3000
MONGO_URI=<insert_your_mongodb_connection>
GEMINI_API_KEY=<insert_your_api_key>
FIREBASE_API_KEY=<insert_your_api_key>
```

### 4️⃣ Firebase configuration
Create a file named `firebase.config.js` inside the `config` folder:

```js
import dotenv from "dotenv";
import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
import { initializeApp as initializeClientApp } from "firebase/app";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync(new URL("./serviceAccountKey.json", import.meta.url))
);

dotenv.config({ override: true });

// Client-side Firebase SDK (for ID token usage)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "<your-project-id>.firebaseapp.com",
  projectId: "<your-project-id>",
  storageBucket: "<your-project-id>.appspot.com",
  messagingSenderId: "<sender-id>",
  appId: "<your-app-id>",
};

const app = initializeClientApp(firebaseConfig);

// Admin SDK for backend operations
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export { app };
export default admin;
```

### 5️⃣ Add Firebase service account key
Create a file named `serviceAccountKey.json` inside `/config`.  
⚠️ **Never commit this file** — keep it private or add it to `.gitignore`.

---

### 6️⃣ Run with Docker (optional)
```bash
docker compose up
```
This launches **MongoDB**, **Redis**, and your **Node.js backend** automatically.

---

### 7️⃣ Start the backend server
```bash
pnpm run dev
# or
nodemon src/server.js
```

---

### 8️⃣ Authentication & Testing
- **Signup:** `POST /api/v1/auth/signup`
- **Login:** `POST /api/v1/auth/login`  
  → Redis caching automatically stores your session token.

Then run the chatbot test client:
```bash
nodemon test-client.js
```
This connects to your backend for real-time AI chat with Redis-based authorization.

---

## ✅ Notes

- **Redis caching**: Basic authorization between login → chat creation  
- **MongoDB**: Stores users, chats, and messages  
- **Firebase**: Manages authentication tokens  
- **Gemini API**: Generates AI responses

---

## 🧩 Tech Stack

- **Node.js** + **Express**
- **Firebase Admin SDK**
- **MongoDB + Mongoose**
- **Redis**
- **Socket.io**
- **Gemini AI API**
- **Docker / Docker Compose**

---

## 🧱 Future Enhancements

- Admin dashboard for chat moderation  
- Refresh token support  
- Enhanced Redis caching strategy  
- AI prompt history tracking
- Testing
- UI development

---

© 2025 — AI Chatbot Backend by Alex Ly
