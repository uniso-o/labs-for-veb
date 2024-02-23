let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c", "d"];
let arr3 = [true, false, true, true, false];

let arr4 = arr1.concat(arr2, arr3);

document.write("Четвертый массив: <br>");
for (let i = 0; i < arr4.length; i++) {
  document.write(i + " --- " + arr4[i] + " <br> ");
}

arr4.splice(2, 1);
arr4.splice(5, 2);

arr4.unshift("element1");
arr4.push("element2");

arr4.shift();
arr4.pop();

delete arr4[1];
delete arr4[4];
delete arr4[7];

document.write("<br>");
document.write("Длина массива: " + arr4.length + "<br>");
document.write("Количество элементов: " + arr4.filter(Boolean).length + "<br>");
document.write("Элементы массива: <br>");
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] !== undefined) {
    document.write(i + " - " + arr4[i] + "<br>");
  }
}

// Очистка
arr4 = [];
// или
arr4.length = 0;


function removeDuplicates(arr) {
    let arr6 = arr.filter(function(value, index, self) {
      return self.indexOf(value.toLowerCase()) === index;
    });
    return arr6
  }
  
  
let arr5 = ["apple", "Banana", "cherry", "banana", "APPLE", "Orange", "apple"];

let arr6 = removeDuplicates(arr5);
  

  document.write("Изначальный массив: <br>");
  for (let i = 0; i < arr5.length; i++) {
    document.write(i + " --- " + arr5[i] + " <br> ");
  }
  
  document.write("Преобразованный массив: <br>");
  for (let i = 0; i < arr6.length; i++) {
    document.write(i + " --- " + arr6[i] + " <br> ");
  }
  