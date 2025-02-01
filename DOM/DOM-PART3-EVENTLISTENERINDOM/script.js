document.body.addEventListener("click", (e) => {
  let title = document.createElement("h4");
  title.className = "modify-element";
  title.textContent = "Good Night";
  title.style.color = "pink";
  document.body.appendChild(title);
  let var1 = document.querySelector("h1");
  var1.innerText = "Hello Good Night!";
  e.stopPropagation();
});
function handleClick() {
  let var1 = document.querySelector("#btn");
  var1.innerHTML = "Button is clicked now!";
  console.log(var1.innerHTML);
}
