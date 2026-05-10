const API = "https://your-5000-url.app.github.dev"; // change this

// SIGNUP
async function signup() {
  await fetch(API + "/auth/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  });

  alert("Signup success");
  window.location.href = "login.html";
}

// LOGIN
async function login() {
  const res = await fetch(API + "/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);

  alert("Login success");
  window.location.href = "dashboard.html";
}

// CREATE TASK
async function createTask() {
  await fetch(API + "/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify({
      title: document.getElementById("title").value,
      description: document.getElementById("desc").value
    })
  });

  alert("Task Added");
  getTasks();
}

// GET TASKS
async function getTasks() {
  const res = await fetch(API + "/tasks", {
    headers: {
      "Authorization": localStorage.getItem("token")
    }
  });

  const tasks = await res.json();
  const list = document.getElementById("tasks");
  list.innerHTML = "";

  tasks.forEach(t => {
    list.innerHTML += `
      <li>
        ${t.title} - ${t.status}
        <button onclick="updateTask('${t._id}','Done')">Done</button>
      </li>
    `;
  });
}

// UPDATE
async function updateTask(id, status) {
  await fetch(API + "/tasks/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify({ status })
  });

  getTasks();
}