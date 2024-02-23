window.onload = function() {
    let spisok = document.getElementById("spisok");
    let table = document.getElementById("table");
    let elsp = spisok.getElementsByTagName("li");
    for(let i=0; i<elsp.length; i++) {
      let num = i + 1; 
      let month = elsp[i].textContent; 
      let row = table.insertRow(i+1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.innerHTML = num;
      cell2.innerHTML = month;
    }
     
  let newstroka = document.createElement("li");
  newstroka.textContent = "13-го месяца не бывает";
  spisok.appendChild(newstroka);

  let days = document.createElement("ul");
  days.innerHTML = "<li>Понедельник</li><li>Вторник</li><li>Среда</li><li>Четверг</li><li>Пятница</li><li>Суббота</li><li>Воскресенье</li>";
  newstroka.appendChild(days);

  };