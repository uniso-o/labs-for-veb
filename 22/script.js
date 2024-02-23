let json = '{"spisok":[{"fruit":"яблоко"}, {"fruit":"груша"}, {"fruit":"апельсин"}, {"fruit":"мандарин"}]}';
  
  let jj = JSON.parse(json);
  
  let ul = document.createElement("ul");
  
  jj.spisok.forEach((el)=> {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(el.fruit));
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
  

