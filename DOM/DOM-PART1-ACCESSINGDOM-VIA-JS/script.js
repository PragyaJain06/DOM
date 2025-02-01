let var1 = document.getElementById("paragraph").innerHTML;
console.log(var1);
let var2 = document.getElementsByClassName("tech");
console.log(var2);

var2[2].innerHTML = "Learning DOM MANipulatiosn";

let var3 = document.getElementsByTagName("h4");
var3[2].innerHTML = "PW SKILLS";
var3[2].style.color = "red";
console.log(var3, "var3333");

let var4 = document.querySelector(".className1");
// var4.classList = "LEARNING QUERY SELECTOR USING CLASS NAME";
var4.setAttribute("setttt", "pragya");
console.log(var4, "4444444");

let var5 = document.querySelector("#id1");
console.log(var5, "55555");
let var6 = document.querySelector("p");
console.log(var6, "6666666666");
