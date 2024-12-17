import { auth, db } from './firebase.js';
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

auth.onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.href = 'index.html'; // Redirect if not logged in
      return;
    }
  
    // Получаем имя пользователя из Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      const userName = userDoc.data().fullName;
      document.getElementById('welcomeMessage').textContent = `Добро пожаловать, ${userName}!`;
    } else {
      document.getElementById('welcomeMessage').textContent = 'Добро пожаловать!';
    }
  });

// Save Task to Firestore
async function addTask() {
    const task = document.getElementById('todoInput').value;
    const user = auth.currentUser;

    await addDoc(collection(db, "tasks"), {
        userId: user.uid,
        task,
        completed: false
    });

    alert("Task added!");
    renderTasks();
}

// Fetch and Render Tasks
async function renderTasks() {
    const user = auth.currentUser;
    const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
    const tasks = await getDocs(q);

    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    tasks.forEach((doc) => {
        const task = doc.data();
        const li = document.createElement('li');
        li.textContent = task.task;
        todoList.appendChild(li);
    });
}

// Call renderTasks on page load
renderTasks();
