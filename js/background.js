const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = images[Math.floor(Math.random()* images.length)]; // Math.random() 랜덤으로 1이하의 소수점값을 출력 
//Math.floor 소수점자리를 버린다.
// console.log(chosenImage);
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);