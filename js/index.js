let value = 0;

function myFunctionOpen() {
  let clear = document.querySelectorAll(".blockDivInner");

  for (let i = 0; i < clear.length; i++) {
    clear[i].style.display = "none";
  }

  let tmp = document.getElementById(event.path[1].id);

  let temp = tmp.querySelector(".blockDivInner");

  if (value === temp.id) {
    temp.style.display = "none";
    temp.style.borderTop = "none";
    value = 0;
  } else if (value !== temp.id) {
    temp.style.display = "block";
    temp.style.borderTop = "2px solid  rgb(23, 26, 46)";
    value = temp.id;
  }
}
