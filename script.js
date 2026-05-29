const randColors=()=>{
let boxes = document.querySelectorAll(".box");
let spans = document.querySelectorAll(".span");

boxes.forEach((e,index)=>{
let a = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);
let c = Math.floor(Math.random()*255);
    e.style.backgroundColor = `rgb(${a},${b},${c})`;
    spans[index].innerHTML=`rgb(${a},${b},${c})`
})

}


