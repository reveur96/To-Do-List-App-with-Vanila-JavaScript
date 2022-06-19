const todayIs = document.querySelector("h2#today");



function getDate(){
    const today = new Date();
    const week = new Array ('SUN','MON','TUE','WED','THU','FRI','SAT',)
    const year = today.getFullYear();
    const month = (today.getMonth() + 1);
    const date = today.getDate();
    const day = week[today.getDay()];

    console.log(month);
    todayIs.innerText = `${year}. ${month}. ${date}.  ${day}`;
};

getDate();

