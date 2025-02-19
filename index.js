let h1 = document.querySelector("h1");
let ism = prompt("Ismingizni kiriting: ");
let rang = prompt("Yoqtirgan rangizni");
let bg = prompt("Orga fon rangi: ");

h1.textContent = `hello, ${ism}!`;
h1.style.color = rang;
h1.style.backgroundColor = bg;
h1.style.textAligh = "center";