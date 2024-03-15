const body = yes.parentElement;

const buttonNo = document.getElementById("no");
const buttonYes = document.getElementById("yes");

const title = document.querySelector(".title");
const img = document.querySelector(".img");

buttonNo.addEventListener("click", () => {
  buttonNo.style.position = "absolute";
  buttonNo.style.top = butttonPosition(15, 85);
  buttonNo.style.left = butttonPosition(15, 85);
});

buttonYes.addEventListener("click", () => {
  img.classList.remove("none");
  title.classList.add("none");
  buttonYes.classList.add("none");
  buttonNo.classList.add("none");
});

buttonNo.addEventListener("mouseover", () => {
  buttonNo.style.position = "absolute";
  buttonNo.style.top = butttonPosition(15, 85);
  buttonNo.style.left = butttonPosition(15, 85);
});

function butttonPosition(min, max) {
  return Math.random() * (max - min) + min + "%";
}
