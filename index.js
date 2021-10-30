const content1 = document.querySelector(".slider-content--1");
const content2 = document.querySelector(".slider-content--2");
const content3 = document.querySelector(".slider-content--3");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const contentArr = [content1, content2, content3];

const len = contentArr.length;
let counter = 0,
    prevCounter = len - 1;



const applyStyles = (counter, prevCounter) => {
    //remove applied style
    contentArr[prevCounter].classList.remove("expand");
    //add the 'expand' class
    contentArr[counter].classList.add("expand");
};

const moveLeft = () => {
    //redue counter
    prevCounter = counter;
    if (counter === 0) {
        counter = len - 1;
    } else {
        counter--;
    }
    applyStyles(counter, prevCounter);
};

const moveRight = () => {
    prevCounter = counter;
    if (counter === len - 1) {
        counter = 0;
    } else {
        counter++;
    }
    applyStyles(counter, prevCounter);
};
   
left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);

