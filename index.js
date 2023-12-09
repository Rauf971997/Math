const links = document.querySelectorAll("a");
const socialLinks = document.querySelector("#socialLinks");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseenter", function () {
    const randomColor = getRandomColor();
    this.style.color = randomColor;
  });

  links[i].addEventListener("mouseleave", function () {
    this.style.color = "";
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// 2-ое задание 
const button = document.querySelector('button');

function showMessage() {
  const userInput = prompt('Введите число от 1 до 10:');

  if (userInput >= 1 && userInput <= 10) {
    for (let i = 1; i <= userInput; i++) {
      console.log(i);
    }
  }
}

button.addEventListener('click', showMessage);
