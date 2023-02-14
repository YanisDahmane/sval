// TODO: write your code here

let finish = false;
function moveHeart() {
  const cases = document.querySelectorAll(`#coeur > td`);
  let modif = false;
  cases.forEach((ca, i) => {
    if (i > 0 && cases[i - 1].classList.contains("active") && !modif && !finish) {
      ca.classList.add("active");
      cases[i - 1].classList.remove("active");
      modif = true;
      if (ca.classList.contains("finish")) {
        document.querySelector('#c1').classList.add("heart");
        document.querySelector('#c2').classList.add("heart");
        finish = true;
      }
    }
  });
}

const button = document.querySelector('#restart');

button.addEventListener('click', (event) => {
  const roads = document.querySelectorAll(`tr`);
  roads.forEach((road) => {
    const cases = road.querySelectorAll('td');
    cases.forEach((ca) => {
      if (ca.classList.remove("active")) {
        ca.classList.contains("active");
      }
    });
    cases[0].classList.add("active");
  });
  finish = false;
  document.querySelector('#c1').classList.remove("heart");
  document.querySelector('#c2').classList.remove("heart");
  document.querySelector('h2').innerHTML = "Joueur 1 press A / Joueur 2 press P";
});

document.addEventListener("keyup", (event) => {
  console.log(event)
  if (event.key === "a") {
    console.log("a");
    moveHeart();
  }
});
