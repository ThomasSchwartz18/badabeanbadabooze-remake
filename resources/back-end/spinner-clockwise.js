// split the text into single letters
const text = document.querySelector('.spinner-clockwise p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i*14.5}deg">${char}</span>`
).join("")

const text2 = document.querySelector('.spinner-counter-clockwise p');
text2.innerHTML = text2.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i*13}deg">${char}</span>`
).join("")
