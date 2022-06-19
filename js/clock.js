const clock = document.querySelector("h2#clock");


function getClock(){ //시계 
    const date = new Date(); //현재 날짜와 시간에 대한 정보 불러오기
    const hours = String(date.getHours()).padStart(2, "0"); //String.padStart(maxLength: number, fillString: string
    const minutes = String(date.getMinutes()).padStart(2, "0"); // (앞의 숫자는 글자의 길이, 뒤의 ""는 현재 string앞에 추가될 string)
    const seconds = String(date.getSeconds()).padStart(2, "0");// string을 2글자로하고 만약 2글자가 안될 경우 0을 붙인다.


    //console.log(new Date); console창에 실시간으로 Date 정보가 표시된다.
    clock.innerText = `${hours}:${minutes}:${seconds}`; //비어있는 clock에 text로 집어넣기 실질적으로 시계를 출력한다.
};


getClock(); //시계 function 실행
setInterval(getClock, 1000); //반복실행 1000는 1초. 매초마다 해당 function을 실행한다 -> 안할 경우 처음의 시간만을 표시하고 시계가 멈춤

