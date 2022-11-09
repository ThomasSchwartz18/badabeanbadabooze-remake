// split the text into single letters
const text = document.querySelector('.spinner-clockwise p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i*14}deg">${char}</span>`
).join("")

// const text = document.querySelector('.spinner-counter-clockwise p');
// text.innerHTML = text.innerText.split("").map(
//     (char, i) =>
//     `<span style="transform:rotate(${i*9.5}deg">${char}</span>`
// ).join("")

// const text = document.querySelector('.spinner-clockwise p', '.spinner-counter-clockwise p');
// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

// const element = document.querySelector('.spinner-counter-clockwise p span');
// for (let i = 0; i < element.clientHeight; i++) {
//     element[i].style.transform = "rotate("+i*18+"deg)"
// }
