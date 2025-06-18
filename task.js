btnNO = document.querySelector("#no");
btnYes = document.querySelector("#yes");

btnNO.onmouseover = function () {
  if (clicked) return; // if already clicked, do nothing
  //  ------------change this code to be responsive for the screen size
  // let x=Math.floor(Math.random()*500)+1;
  // let y=Math.floor(Math.random()*500)+1;
  //--------------change this code to be responsive for the screen size

  //this is move no in responsive screen ------------------
  const btnWidth = btnNO.offsetWidth;
  const btnHeight = btnNO.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  //this is move no in responsive screen ------------------
  // btn.style.cssText="position:relative;left:20%";
  // btn.style.cssText=`position:absolute;left:${x}px`;
  // btn.style.cssText=`position:absolute;top:${y}px`;
  btnNO.style.position = "absolute";
  btnNO.style.left = `${x}px`;
  btnNO.style.top = `${y}px`;
};
btnYes.onmouseover = function () {
  btnNO.style = "display: block"; //to get no back to it's position when choose yes
};
function pad(n) {
  return n < 10 ? "0" + n : n;
}
let ask = document.getElementById("ask");
let answer = document.getElementById("answer");
const today = new Date();
const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7; // days until next Saturday (if today is Saturday, next Saturday is in 7 days)
const nextSaturday = new Date(today);
nextSaturday.setDate(today.getDate() + daysUntilSaturday);

let clicked = false;
btnYes.onclick = function () {
  if (clicked) return; // if already clicked, do nothing
  clicked = true; // mark as clicked
  let will = document.createElement("h2");
  will.innerText = `yay, see you on next ${pad(nextSaturday.getDate())}-${pad(
    nextSaturday.getMonth() + 1
  )}-${nextSaturday.getFullYear()}`;
  ask.style.display = "none";
  answer.appendChild(will);
};
