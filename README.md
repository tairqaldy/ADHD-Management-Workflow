# ADHD Management Workflow 🚀

ADHD Management Workflow is a thoughtfully designed **web application** built to enhance productivity and time management for individuals with ADHD or anyone looking to stay organized. It includes essential tools like:

- ✅ **To-Do List** for task management.  
- 📝 **Notes** to save important information.  
- ⏲️ **Pomodoro Timer** to improve focus and efficiency.  
- 🎨 **Multiple Themes** (Dark, Light, Normal) for personalized experience.

---

## 🔧 **Tech Stack**
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Firebase Authentication and Firestore  
- **Tools**: Git, GitHub, Firebase SDK  

---

## 🚀 **Features**
1. **User Authentication**  
   - Secure **Sign Up** and **Log In** using Firebase Authentication.  
   - User credentials are stored safely in Firebase.

2. **To-Do List**  
   - Add, complete, and remove tasks.  
   - Tasks persist even after logging out.

3. **Notes**  
   - Create, edit, and delete personal notes.  
   - Notes are stored in Firestore for persistent access.

4. **Pomodoro Timer**  
   - Timer for focus (25 min) and break sessions.  
   - A simple visual counter to track completed cycles.

5. **Theme Switching**  
   - Toggle between **Dark**, **Light**, and **Normal** themes to suit your preferences.

---

## 🛠️ **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/ADHD-Management-Workflow.git
cd ADHD-Management-Workflow
```

### **2. Create `firebase.js` File**
Since **Firebase credentials** are sensitive, the `firebase.js` file is **excluded** from the repository for security. Follow these steps to create it:

1. **Go to Firebase Console** → Create a project.  
2. Enable **Authentication** (Email/Password) and set up **Firestore Database**.  
3. Copy your Firebase configuration from the project settings.

**Create `firebase.js`** inside the root folder:
```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
```
Replace all the placeholder values (`YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc.) with your Firebase project settings.

---

### **3. Run the Project**
1. Open the `index.html` file using **Live Server** (VS Code Extension) or any local server.  
2. Sign Up or Log In to access the main tools.

---

## 🎮 **How to Use**

### **1. Sign Up / Log In**
- Go to the **Sign Up** form.  
- Enter your **Full Name**, **Email**, and **Password** to create an account.  
- Once registered, log in using your credentials.

### **2. To-Do List**
- Add tasks in the input field.  
- Tasks can be marked as completed or removed.

### **3. Notes**
- Enter a **Title** and **Content** for your notes.  
- Notes are saved and can be edited or deleted anytime.

### **4. Pomodoro Timer**
- Click **Start** to begin a 25-minute focus session.  
- Use the **Break** button to start a 5-minute break.  
- Reset the timer at any point.  
- Track completed Pomodoro cycles at the top.

### **5. Theme Switching**
- Click the **Switch Theme** button in the header to toggle between available themes.

---

## 🔐 **Security Note**
- Never expose your Firebase API keys publicly. Use environment variables for production.  
- Always set Firebase rules to secure your database.

---

## 💡 **Contributing**
We welcome contributions! Here's how you can help:
1. Fork the repository.  
2. Create a new branch: `git checkout -b feature/your-feature`.  
3. Make your changes and commit: `git commit -m "Add your feature"`.  
4. Push to the branch: `git push origin feature/your-feature`.  
5. Open a Pull Request.

---

## 📝 **License**
This project is licensed under the **MIT License**.

---

## 🎯 **Future Improvements**
- Add user dashboards for better task visualization.  
- Integrate reminders for tasks and focus sessions.  
- Add a calendar view for better time management.

---

**Built with ❤️ for productivity and focus!**  
