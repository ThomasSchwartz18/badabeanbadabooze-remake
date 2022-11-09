// split the text into single letters
const text = document.querySelector('.p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i*9.5}deg">${char}</span>`
).join("")