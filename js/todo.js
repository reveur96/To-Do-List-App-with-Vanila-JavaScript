const toDoForm = document.getElementById("todo-form"); //전역변수
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

//const toDos = []; array 생성 newTodo값을 push받음 ,
//하지만 값이 비어있는 상태로 받아서 새로고침하고 다시 입력하면 이전의 기록이 지워지는 현상이 생김
//그래서 localstorage에 이미 저장되어있던 이전의 old todo를 사용하기위해 let으로 바꿈
let toDos = []; 

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos)); //localStorage에 push받은 array를 저장
}   //JSON.stringify string으로 array저장. 원래는 array로 저장이 안됨.

function deleteToDo(event) { //delete button의 delete event
    const li = event.target.parentElement; //지역변수 click event가 실행된 요소찾기. 부모요소를 target으로 한다.
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDos는 toDos DB에 있는 요소 중 하나. 고유번호인 id를 이용해서 특정 요소만 삭제
    saveToDos(); // 필수. 안그럼 localstorage에서 삭제가 안됨
}

function paintToDo(newTodo){
    const li = document.createElement("li"); //비어있는 list에 li추가 (하지만 아직 list에 위치하지는 않음)
    li.id = newTodo.id; // id: Date.now()를 고유번호로 사용하기 위해 li의 id를 추가
    const span = document.createElement("span"); //span을 쓰는 이유: button을 추가하려고
    span.innerText = newTodo.text; // span에 input의 value값인 newTodo를 추가한다.
    const button = document.createElement("button"); //버튼 추가
    button.innerText ="❤️"; //button의 모양
    button.addEventListener("click", deleteToDo); // click event가 실행되면 deleteToDo한다.
    //무조건 append를 마지막에 위치시킨다. 요소를 만들고나서 위치를 지정한다는 개념
    li.appendChild(span); //li안에 span이 위치하도록 
    li.appendChild(button); //button을 li에 위치
    toDoList.appendChild(li); //list안에 li가 위치하도록 지정함.
}

function handleToDoSubmit(event) {
    event.preventDefault(); // submit을 못하도록 event를 막음
    const newTodo = toDoInput.value; //< 선행 > input의 value를 새로운 변수에 복사 , 아래의 동작에 영향을 받지 않는다.
    toDoInput.value = ""; // < 후행 > 비워져있지만 newTodo가 비워진것은 아님. 위의 newTodo가 변수를 복사한 후에 비워지는 것이기 때문.
    const newTodoObj = { //newTodo의 object(text와 id)값을 보내기위해 
        text: newTodo,
        id: Date.now(), // 랜덤으로 번호부여 (실시간으로 초를 기록)
    }; // localstorage에서 delete하기위해 고유번호 부여 
    toDos.push(newTodoObj); //위에서 생성한 toDos array에 newTodo(input value)값을 push
    paintToDo(newTodoObj); //paintToDo에게 newTodo의 object를 보낸다.  보내진 newTodo는 ""비워지기 전의 값.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //특정 event가 동작하는것을 찾아 func 적용


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //JSON으로 받은 string을 다시 javascript에서 사용 가능한 object로 
    toDos = parsedToDos; // 이전의 값을 유지하며 새로운 값을 받기 위해 이전의 값을 복원한다.
    parsedToDos.forEach(paintToDo); // forEach 함수는 parsedToDos배열의 요소마다 paintToDo를 실행.
    //  forEach실행되면  paintToDO를 불러온다. paintToDO가 실행되면 localstorage에 저장된 값(newToDoObj)을 출력해서 보이도록 만든다  
}

