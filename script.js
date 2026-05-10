const API = "";

// LOGIN
async function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(API+"/auth/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,password})
  });

  const data = await res.json();

  if(data.token){
    localStorage.setItem("token",data.token);
    window.location.href = "dashboard.html";
  } else {
    alert("Login failed");
  }
}

// SIGNUP
async function signup(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await fetch(API+"/auth/signup",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name,email,password})
  });

  alert("Signup Success");
  window.location.href = "login.html";
}

// TASK
async function createTask(){
  const title = document.getElementById("title").value;

  await fetch(API+"/tasks",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":localStorage.getItem("token")
    },
    body:JSON.stringify({title})
  });

  alert("Task added");
}

async function loadTasks(){
  const res = await fetch(API+"/tasks",{
    headers:{
      "Authorization":localStorage.getItem("token")
    }
  });

  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(t=>{
    const li = document.createElement("li");
    li.innerText = t.title;
    list.appendChild(li);
  });
}
