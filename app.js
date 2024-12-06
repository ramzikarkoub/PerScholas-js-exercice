// // Helper Functions
// function createListItem(text) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   li.className = "list-item";
//   return li;
// }

// // Selectors
// const header = document.getElementById("main-header");
// const toggleThemeBtn = document.getElementById("toggle-theme");
// const colorBox = document.getElementById("color-box");
// const dynamicTextInput = document.getElementById("dynamic-text");
// const output = document.getElementById("output");
// const dynamicList = document.getElementById("dynamic-list");
// const hoverMeBtn = document.getElementById("hover-me");
// const hoverOutput = document.getElementById("hover-output");

// // Change Header Text
// document.getElementById("change-header").addEventListener("click", () => {
//   header.textContent = "Header Updated!";
// });

// // Toggle Theme
// toggleThemeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-theme");
// });

// // Update Content
// document.getElementById("update-content").addEventListener("click", () => {
//   const text = dynamicTextInput.value;
//   output.textContent = text || "Please enter some text!";
// });

// // Add and Remove List Items
// document.getElementById("add-list-item").addEventListener("click", () => {
//   const newItem = createListItem(`Item ${dynamicList.children.length + 1}`);
//   dynamicList.appendChild(newItem);
// });

// document.getElementById("remove-list-item").addEventListener("click", () => {
//   if (dynamicList.lastChild) {
//     dynamicList.removeChild(dynamicList.lastChild);
//   }
// });

// // Hover Event
// hoverMeBtn.addEventListener("mouseover", () => {
//   hoverOutput.textContent = "You hovered over the button!";
// });

// hoverMeBtn.addEventListener("mouseout", () => {
//   hoverOutput.textContent = "Hover over the button above.";
// });

// // Change Box Color
// let colorIndex = 0;
// const colors = ["red", "green", "blue", "purple"];
// colorBox.addEventListener("click", () => {
//   colorBox.style.backgroundColor = colors[colorIndex];
//   colorIndex = (colorIndex + 1) % colors.length;
// });

const box = document.querySelector(".box");
// console.log(box);
const lights = document.querySelectorAll(".light");

const changeToCircle = () => {
  box.classList.toggle("circle");
};

const changelights = (color) => {
  if (color === "red") {
    lights[0].style.backgroundColor = "red";
    lights[1].style.backgroundColor = ""; // Reset others
    lights[2].style.backgroundColor = "";
  } else if (color === "yellow") {
    lights[0].style.backgroundColor = "";
    lights[1].style.backgroundColor = "yellow";
    lights[2].style.backgroundColor = "";
  } else if (color === "green") {
    lights[0].style.backgroundColor = "";
    lights[1].style.backgroundColor = "";
    lights[2].style.backgroundColor = "green";
  }
};
