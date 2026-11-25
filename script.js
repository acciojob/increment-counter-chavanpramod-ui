//your JS code here. If required.
const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  alert(count);
  count += 1;
  counterEl.textContent = count;
});