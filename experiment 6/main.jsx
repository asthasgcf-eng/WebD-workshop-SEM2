const heading = document.getElementById("heading");
const para = document.getElementById("para");
const input = document.getElementById("input");
const textBtn = document.getElementById("textBtn");
const bgBtn = document.getElementById("bgBtn");
const fontBtn = document.getElementById("fontBtn");
const toggleBtn = document.getElementById("toggleBtn");
const resetBtn = document.getElementById("resetBtn");
textBtn.onclick = () => {
if (input.value !== "") {
heading.textContent = input.value;
input.value = "";
} else {
alert("Enter some text first");
}
};
bgBtn.onclick = () => {
let randomColor = "#" + Math.floor(Math.random() * 
16777215).toString(16);
document.body.style.backgroundColor = randomColor;
};
let size = 16;
fontBtn.onclick = () => {
size += 2;
para.style.fontSize = size + "px";
};
toggleBtn.onclick = () => {
if (para.style.display === "none") {
para.style.display = "block";
} else {
para.style.display = "none";
}
};
resetBtn.onclick = () => {
heading.textContent = "Welcome to DOM Events";
para.style.fontSize = "16px";
document.body.style.backgroundColor = "";
para.style.display = "block";
input.value = "";
size = 16;
}