const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
const week4 = document.getElementById("week4");

const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");

week1.addEventListener("click", () => {
  t1.style.display = "block";
  t2.style.display = "none";
  t3.style.display = "none";
  t4.style.display = "none";
});

week2.addEventListener("click", () => {
  t1.style.display = "none";
  t2.style.display = "block";
  t3.style.display = "none";
  t4.style.display = "none";
});

week3.addEventListener("click", () => {
  t1.style.display = "none";
  t2.style.display = "none";
  t3.style.display = "block";
  t4.style.display = "none";
});

week4.addEventListener("click", () => {
  t1.style.display = "none";
  t2.style.display = "none";
  t3.style.display = "none";
  t4.style.display = "block";
});
