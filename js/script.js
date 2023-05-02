const btnEL = document.querySelector(".btn");
const contentEL = document.querySelector(".love__content-description");
const lovers = {
  userName1: "",
  userName2: "",
};

function onClick(e) {
  if (e.target.classList.contains("btn--find-out")) {
    getUserName();
  } else if (e.target.classList.contains("btn--submit")) {
    calculateLovePercentage();
  } else {
    reset();
  }
}

function getUserName() {
  lovers.userName1 = prompt("Please input your name");
  if (lovers.userName1 === "" || lovers.userName1 === null) {
    alert("Please enter a valid name");
    return;
  }
  lovers.userName2 = prompt("Please input your partner's name");
  if (lovers.userName2 === "" || lovers.userName2 === null) {
    alert("Please enter a valid name");
    return;
  }

  contentEL.textContent = `Your name is "${lovers.userName1.replace(
    lovers.userName1[0],
    lovers.userName1[0].toUpperCase()
  )}" and your partner's name is "${lovers.userName2.replace(
    lovers.userName2[0],
    lovers.userName2[0].toUpperCase()
  )}"`;

  btnEL.textContent = "Calculate the love percentage";
  btnEL.classList.remove("btn--find-out");
  btnEL.classList.add("btn--submit");
}

function calculateLovePercentage() {
  const result = document.createElement("p");
  result.classList.add("love__content-description");
  result.style.paddingTop = "0px";
  const percentage = Math.floor(Math.random() * 100 + 1);

  contentEL.textContent = `The percentage of love between ${lovers.userName1} and ${lovers.userName2} is ${percentage}%`;

  if (percentage > 70) {
    result.textContent = `"Your love is superb, you two are going to have a beautiful love life.💖"`;
  } else if (percentage >= 40 && percentage <= 70) {
    result.textContent = `you can build on what you have😍`;
  } else {
    result.textContent = `Only God can help two of you🤣, you need to pray very well🙏`;
  }

  document.querySelector(".love__content-box").appendChild(result);
  btnEL.textContent = "Reset";
  btnEL.classList.remove("btn--submit");
  btnEL.classList.add("btn--reset");
  return;
}

function reset() {
  contentEL.textContent = `Welcome to the "Brooklyn love percentage calculator", we are happy
  to have you on board. Do you want to know the bond or love or maybe
  even affection you and your partner share? Then click on the find
  out button below.`;
  contentEL.nextElementSibling.remove();
  btnEL.textContent = "Find out";
  btnEL.classList.remove("btn--reset");
  btnEL.classList.add("btn--find-out");
}

// getUserName();
btnEL.addEventListener("click", onClick);
