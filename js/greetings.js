const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); // 사용자가 입력한 이름이 들어갈 곳

const HIDDEN_CLASSNAME = "hidden"; //user가 login하고나면 loginform을 삭제하기위한 변수 선언
const USERNAME_KEY = "username";

function onLoginSubmit(event) { // loginForm에서 submit event 발생하면 실행될 function
    event.preventDefault(); // submit하면 자동으로 새로고침되는 현상을 막아줌 -> 그래야  localstorage에 저장하는 단계로 넘어갈 수 있다.
    loginForm.classList.add(HIDDEN_CLASSNAME); // user가 입력한 이름 hidden class추가 // login form을 hidden(css)상태로
    const username = loginInput.value; //username은 login input의 value로 한다.(user가 입력한 값)
    localStorage.setItem(USERNAME_KEY, username); //localStorage에 USERNAME_KEY이름으로 username라는 값을 저장한다. -> USERNAME_KEY 에 value가 username이고 username는 위에서 선언한 loginInput.value이다.
    paintGreetings(username); //paintGreeting을 실행하는데 이때 변수의 값을 (username)으로 한다.
}

function paintGreetings(username){ //user가 login하고 나면  user이름이 화면에 노출
    greeting.innerText = `Hello ${username}!`; // 비어있는 greeting에 text 추가 
    greeting.classList.remove(HIDDEN_CLASSNAME); //loginform을 삭제하기위해 선언했던 변수(HIDDEN_CLASSNAME)를 remove
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage에 저장된 USERNAME_KEY의 value(username)를 가져온다.

if (savedUsername === null){ //local storage에 username이 없을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME); //loginform을 삭제하기위해 선언했던 변수의 값, 즉 hidden한 class를 지운다. -> 다시 loginform을 가져온다.
    loginForm.addEventListener("submit", onLoginSubmit); //submit event 발생 시 자동으로 onLoginSubmit가 실행되도록
} else{ //localstorage에 username이 있을 경우
    paintGreetings(savedUsername) //localstorage에 저장된 username이 화면에 노출되는 function 실행. 
}

