const yes = document.getElementById("yes");
const no = document.getElementById("no");

const title = document.querySelector(".title");

const body = yes.parentElement;

const img = document.querySelector(".img");

let counterVal = 1;

no.addEventListener("click", (e) => {
  counterVal++;
  if (counterVal % 2 == 0) {
    body.insertBefore(no, yes);
  } else {
    body.insertBefore(yes, no);
  }
});

yes.addEventListener("click", (e) => {
  img.classList.remove("none");
  title.classList.add("none");
  yes.classList.add("none");
  no.classList.add("none");

});
