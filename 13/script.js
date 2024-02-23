
let chislo = parseInt(prompt("Введите число:"));
let stepen = parseInt(prompt("Введите степень:"));


function chislostNumber(chislo, stepen) {
    if (stepen === undefined) {
        stepen = 1; 
    }
    let result = Math.pow(chislo, stepen); 
    alert(result);
}
chislostNumber(chislo, stepen);

let mesyacNumber;
function setMesyacNumber() {
    let input = prompt("Номер месяца 1-12:");
    mesyacNumber = parseInt(input);
}

function displayMesyacName() {
    let mesyacNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let mesyacName = mesyacNames[mesyacNumber - 1]; 
    document.write("Месяц: " + mesyacName +"<br>");
    }

setMesyacNumber(); displayMesyacName(); 


let array = [1, 8, 20, 30, 35];
function findMaxEl(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
let maxElement = findMaxEl(array);
function displayResult(maxEl) {
    if (maxEl < 10) {
        document.write("Максимальный элемент находится в диапазоне от 0 до 9 <br>");
    } else if (maxEl < 100) {
        document.write("Максимальный элемент находится в диапазоне от 10 до 99 <br>");
    } else {
        document.write("Максимальный элемент находится в диапазоне свыше 100 <br>");
    }
}

displayResult(maxEl);

function repeat(str = '', n = 3) {
    let repeatedStr = '';
    for (let i = 0; i < n; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}

document.write(repeat("papa"));
document.write(repeat("mama", 2));
repeat(str = '', n = 3);

const primerResult = (a, b, c) => a * b / c;
document.write("<br> Результат: " + primerResult(10,3,3));