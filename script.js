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
treasure2.addEventListener("click", () => {
  treasure2.style.color = "red";
  // add highlight class for flash animation
  treasure2.classList.add("highlight");

  // remove it after 0.8s so it can be reapplied if needed
  setTimeout(() => {
    treasure2.classList.remove("highlight");
  }, 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Bra jobbat! Skatt 2 låg gömd mellan raderna");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});
// skatt 3
const treasure3 = document.getElementById("treasure3");
treasure3.addEventListener("click", () => {
  if (treasure3.classList.contains("found")) return;
  treasure3.classList.add("found", "highlight");
  setTimeout(() => treasure3.classList.remove("highlight"), 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("✨ En gnista av guld! Skatt 3 är din.");
  if (foundCount === 10) { clearInterval(timer); alert("Alla skatter hittade på " + time + " sekunder!"); }
});

// skatt 4
const treasure4 = document.getElementById("treasure4");
treasure4.addEventListener("click", () => {
  if (treasure4.classList.contains("found")) return;
  treasure4.classList.add("found", "highlight");
  setTimeout(() => treasure4.classList.remove("highlight"), 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("🌟 Du fann skatt 4 — stjärnglans!");
  if (foundCount === 10) { clearInterval(timer); alert("Alla skatter hittade på " + time + " sekunder!"); }
});

// skatt 5
const treasure5 = document.getElementById("treasure5");
treasure5.addEventListener("click", () => {
  if (treasure5.classList.contains("found")) return;
  treasure5.classList.add("found", "highlight");
  setTimeout(() => treasure5.classList.remove("highlight"), 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("🔥 Skatt 5 låg längst ner — snyggt jobbat!");
  if (foundCount === 10) { clearInterval(timer); alert("Alla skatter hittade på " + time + " sekunder!"); }
});

// skatt 6
const treasure6 = document.getElementById("treasure6");
treasure6.addEventListener("click", () => {
  if (treasure6.classList.contains("found")) return;
  treasure6.classList.add("found", "highlight");
  setTimeout(() => treasure6.classList.remove("highlight"), 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("🏔️ Mellan klipporna gömde sig skatt 6. Bra öga!");
  if (foundCount === 10) { clearInterval(timer); alert("Alla skatter hittade på " + time + " sekunder!"); }
});

// skatt 7
const treasure7 = document.getElementById("treasure7");
treasure7.addEventListener("click", () => {
  if (treasure7.classList.contains("found")) return;
  treasure7.classList.add("found", "highlight");
  setTimeout(() => treasure7.classList.remove("highlight"), 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("🐚 Djupt under vågorna hittade du skatt 7.");
  if (foundCount === 10) { clearInterval(timer); alert("Alla skatter hittade på " + time + " sekunder!"); }
});

// skatt 8
const treasure8 = document.getElementById("treasure8");
treasure8.addEventListener("click", () => {
  if (treasure8.classList.contains("found")) return;
  treasure8.classList.add("found", "highlight");
  setTimeout(() => treasure8.classList.remove("highlight"), 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("🔍 Skatt 8 var väl kamouflerad!");
  if (foundCount === 10) { clearInterval(timer); alert("Alla skatter hittade på " + time + " sekunder!"); }
});

// skatt 9  
const treasure9 = document.getElementById("treasure9");
treasure9.addEventListener("click", () => {
  if (treasure9.classList.contains("found")) return;
  treasure9.classList.add("found", "highlight");
  setTimeout(() => treasure9.classList.remove("highlight"), 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("🔑 Du hittade nyckeln — skatt 9!");
  if (foundCount === 10) { clearInterval(timer); alert("Alla skatter hittade på " + time + " sekunder!"); }
});

// skatt 10 
const treasure10 = document.getElementById("treasure10");
treasure10.addEventListener("click", () => {
  if (treasure10.classList.contains("found")) return;
  treasure10.classList.add("found", "highlight");
  setTimeout(() => treasure10.classList.remove("highlight"), 800);

  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("🏆 Mästare! Skatt 10 hittad.");
  if (foundCount === 10) { clearInterval(timer); alert("Alla skatter hittade på " + time + " sekunder!"); }
});