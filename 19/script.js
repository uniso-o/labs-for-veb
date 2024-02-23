function input(event) {
   let input = event.target.value;
   let output = document.getElementById("output");
   output.innerHTML = input;
}


let sss = document.getElementById("sss");
        let output = document.getElementById("out");

        sss.addEventListener("click", function(event) {
            event.preventDefault();
            output.innerHTML = "Событие click <br>";
        });

        sss.addEventListener("mouseover", function(event) {
            output.innerHTML = "Событие mouseover <br>";
        });

        sss.addEventListener("mouseout", function(event) {
            output.innerHTML = "Событие mouseout <br>";
        });

        sss.addEventListener("dblclick", function(event) {
            output.innerHTML = "Событие dblclick <br>";
        });

        sss.addEventListener("contextmenu", function(event) {
            output.innerHTML = "Событие contextmenu <br>";
        });