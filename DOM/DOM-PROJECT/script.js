// let randomHex = "0123456789ABCDEF".split("");

// const generateColors = () => {
//   let finalColor = ["#"];
//   for (color of randomHex) {
//     finalColor.push(randomHex[Math.floor(Math.random() * randomHex.length)]);
//   }
//   return finalColor.join("").slice(0, 7);
// };

// //# 0123456789 ABCDEF

// document.getElementById("btn").addEventListener("click", () => {
//   document.getElementById("btn").innerText = "Press ME again to change color!";
//   document.body.style.backgroundColor = generateColors();
// });

let randomHex = "0123456789ABCDEF".split(""); // Static array of hex characters

const generateColors = () => {
  let finalColor = "#"; // Initialize the color string with the hash symbol
  for (let i = 0; i < 6; i++) {
    // You need 6 characters after #
    finalColor += randomHex[Math.floor(Math.random() * randomHex.length)];
  }
  return finalColor;
};

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("btn").innerText = "Press ME again to change color!";
  document.body.style.backgroundColor = generateColors();
});
