window.onload = function() {
  let body = document.body;
  let yzl = body.querySelectorAll("*");

  console.log("Все потомки тега body:");

  for (let i = 0; i < yzl.length; i++) {
    if (i < 2) {
      console.log("Тип узла: " + yzl[i].nodeName);
    }
    console.log(yzl[i]);
  }

  let button = document.getElementById("button");

  button.addEventListener("click", function() {
    let mainel = document.getElementById("main");
    let zags = mainel.querySelectorAll("h1, h2, h3, h4, h5, h6");

    let content = "Содержимое заголовков:\n";

    zags.forEach(function(zag) {
      content += zag.textContent + "\n";
    });

    alert(content);
  });
};
  function rrr() {
    let yesr = document.getElementById("yesr");
    let yesll = document.getElementById("yes");
    let noll = document.getElementById("no");
 
    if  (yesr.checked) {
       yesll.classList.add("act");
       yesll.classList.remove("inact");
       noll.classList.remove("act");
       noll.classList.add("inact");
    } else {
       yesll.classList.remove("act");
       yesll.classList.add("inact");
       noll.classList.add("act");
       noll.classList.remove("inact");
    }
 }


   