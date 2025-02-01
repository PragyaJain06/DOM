//appending in html
let title = document.createElement("h1");
title.className = "making-dom";
title.textContent = "PW SKILLS";
title.style.color = "red";
title.style.fontSize = "30px";
document.body.appendChild(title);

//removing elements from HTML
let ul = document.getElementsByTagName("ul")[0];
console.log(ul);
let var1 = document.querySelectorAll(".Element");

for (list of var1) {
  ul.removeChild(list);
}
