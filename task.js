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
function pad(n) {
  return n < 10 ? '0' + n : n;
}
let ask=document.getElementById("ask");
let answer=document.getElementById("answer");
const today = new Date();
const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7; // days until next Saturday (if today is Saturday, next Saturday is in 7 days)
const nextSaturday = new Date(today);
nextSaturday.setDate(today.getDate() + daysUntilSaturday);
btn2.onclick=function(){
    let will= document.createElement("h2");
    will.innerText = `yay, see you on the ${pad(nextSaturday.getDate())}-${pad(nextSaturday.getMonth() + 1)}-${nextSaturday.getFullYear()}`;
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
