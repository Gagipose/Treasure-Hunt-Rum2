// Räknare
let foundCount = 0;
let time = 0;
let timer;

// Hämta HUD-element
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

// Starta timern
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

// --- Här ska ni lägga in era egna skatter --- //
//skatt 1
const treasure1 = document.getElementById("treasure1");
treasure1.addEventListener("click", () => {
  treasure1.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade skatt 1!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
//skatt 2
const treasure2 = document.getElementById("treasure2");
treasure1.addEventListener("click", () => {
  treasure1.style.color = "red";
  // add highlight class for flash animation
  treasure1.classList.add("highlight");

  // remove it after 0.8s so it can be reapplied if needed
  setTimeout(() => {
    treasure1.classList.remove("highlight");
  }, 800);
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Bra jobbat! Skatt 2 låg gömd mellan raderna");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
//skatt 3
//skatt 4
//skatt 5
//skatt 6
//skatt 7
//skatt 8
//skatt 9
//skatt 10
// Prevent double clicking


// Winning condition

// ... fortsätt för alla skatter ...
