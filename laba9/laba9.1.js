let elements = document.getElementsByTagName("td");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseover", function () {
    if (this.innerHTML === "Элемент1") {
      this.classList.add("cl2");
    }
    if (this.innerHTML === "Элемент4") {
      this.style.color = "yellow";
    }
  });
  elements[i].addEventListener("mouseout", function () {
    if (this.innerHTML === "Элемент1") {
      this.classList.remove("cl2");
      this.classList.add("cl5");
    }
  });

  elements[i].addEventListener("dblclick", function () {
    if (this.innerHTML === "Элемент2") {
      this.classList.add("cl3");
    } else if (this.innerHTML === "Элемент5") {
      this.style.backgroundColor = "red";
    }
  });

  elements[i].addEventListener("click", function () {
    if (this.innerHTML === "Элемент3") {
      this.classList.add("cl4");
    } else if (this.innerHTML === "Элемент6") {
      this.style.fontStyle = "italic";
    }
  });
}
let result = "ddsdsd" === 2;
let sum = 0;

function addNumber(number) {
  sum += number;
}

function calculate() {
  alert(`Результат: ${sum}`);
}

let textElement = document.getElementById("v");

textElement.addEventListener("mouseover", function () {
  textElement.style.fontSize = "30px";
});

textElement.addEventListener("mouseout", function () {
  textElement.style.color = "blue";
});