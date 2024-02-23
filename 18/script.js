let bodyChildren = document.body.childNodes;
let bodyContent = "";
for (let i = 0; i < bodyChildren.length; i++) {
   bodyContent += bodyChildren[i].nodeName + "<br>";
}
let div1 = document.getElementById("div1");
div1.innerHTML = bodyContent+ "<br>";

let allel = document.getElementsByTagName("*");
let documentContent = "";
for (let i = 0; i < allel.length; i++) {
   documentContent += allel[i].nodeName + "<br>";
}

let div2 = document.getElementById("div2");
div2.innerHTML = documentContent + "<br>";


let el1 = document.getElementById("el");
let el2 = document.all['el'];
let el3 = document.getElementsByTagName("h3")[0];
console.log(el1 === el2); 
console.log(el1 === el3); 
console.log(el2 === el3); 