const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");



const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY",username)
  paintGreetings(username);
}

function onLogout(event){
    localStorage.removeItem('USERNAME_KEY');
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value=``;
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const logOutBtn = document.createElement("button");
    logOutBtn.classList.add("btn");
    greeting.appendChild(logOutBtn)
    logOutBtn.innerText = `Log out`
    logOutBtn.addEventListener("click",onLogout);
}



const savedUsername = localStorage.getItem("USERNAME_KEY");

if( savedUsername === null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}