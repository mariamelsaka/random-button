// task 1 =================================



console.log("task1 ================================");

btn=document.querySelector("#no");
btn2=document.querySelector("#yes");



btn.onmouseover=function(){
    let x=Math.floor(Math.random()*500)+1;
    let y=Math.floor(Math.random()*500)+1;
    // btn.style.cssText="position:relative;left:20%";
    // btn.style.cssText=`position:absolute;left:${x}px`;
    // btn.style.cssText=`position:absolute;top:${y}px`;
    btn.style.left=`${y}px`;
    btn.style.top=`${y}px`;
    
}
btn2.onmouseover=function(){
   btn.style="display: block;position: absolute;left: 20%;"

}
let ask=document.getElementById("ask");
let answer=document.getElementById("answer");

btn2.onclick=function(){
    let will= document.createElement("h2");
    will.innerText="yay, see you on the 24th";
    ask.style.display="none";
    answer.appendChild(will);

}

// task 2 =================================
console.log("task2 ================================");


// task 3 =================================
console.log("task3 ================================");


// task 4 =================================
console.log("task4 ================================");



// task 5 =================================
console.log("task5 ================================");



// task 6 =================================
console.log("task6 ================================");
