document.addEventListener("DOMContentLoaded", function(event) { 
    let sptype;
    let spel = [];
  
    let createList = function(type) {
      sptype = type;
      let spisok = document.createElement(type);
      spisok.id = "myspisok";
      document.body.appendChild(spisok);
    }
  
    let addItem = function(position) {
        let text = prompt("Введте новый элемент списка:");
        if (text) {
          spel.push(text);
    
          let spisok = document.getElementById("myspisok");
          let newItem = document.createElement("li");
          newItem.textContent = text;
          
          if (position === "start") {
              spisok.insertBefore(newItem, spisok.firstChild);
            } else if (position === "end") {
              spisok.appendChild(newItem);
            
        }
      }
    }
  
    let removeItem = function(position) {
      if (position === "start") {
        spel.shift();
      } else if (position === "end") {
        spel.pop();
      }
  
      let spisok = document.getElementById("myspisok");
      spisok.removeChild(spisok.childNodes[position === "start" ? 0 : spisok.childNodes.length - 1]);
    }
  
    let changeColor = function() {
      let spisok = document.getElementById("myspisok");
      let items = spisok.childNodes;
  
      for (let i = 0; i < items.length; i++) {
        if (i % 2 === 0) {
          items[i].style.color = "red";
        }
      }
    }
  
    document.getElementById("neup").addEventListener("click", function() {
      createList("ul");
    });
  
    document.getElementById("up").addEventListener("click", function() {
      createList("ol");
    });
    document.getElementById("addstart").addEventListener("click", function() {
      addItem("start");
    });
  
    document.getElementById("addend").addEventListener("click", function() {
      addItem("end");
    });
  
    document.getElementById("remstart").addEventListener("click", function() {
      removeItem("start");
    });
  
    document.getElementById("remend").addEventListener("click", function() {
      removeItem("end");
    });
  
    document.getElementById("color").addEventListener("click", function() {
      changeColor();
    });
  });