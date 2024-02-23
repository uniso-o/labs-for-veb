
let base = parseInt(prompt("Введите число:"));
let exponent = parseInt(prompt("Введите степень:"));


function exponentiateNumber(base, exponent) {
    if (exponent === undefined) { // не указана
        exponent = 1; 
    }

    let result = Math.pow(base, exponent); 
    alert(result);
}
exponentiateNumber(base, exponent);

let monthNumber;

function setMonthNumber() {
    let input = prompt("Введите номер месяца от 1 до 12:");
    monthNumber = parseInt(input);
}

function displayMonthName() {
    let monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let monthName = monthNames[monthNumber - 1]; 
    document.write("Название месяца: " + monthName +"<br>");
    }

setMonthNumber(); displayMonthName(); 


let arr = [10, 15, 20, 25, 300];

function findMaxElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let maxElement = findMaxElement(arr);
function displayResult(maxElement) {
    if (maxElement < 10) {
        document.write("Максимальный элемент находится в диапазоне от 0 до 9 <br>");
    } else if (maxElement < 100) {
        document.write("Максимальный элемент находится в диапазоне от 10 до 99 <br>");
    } else {
        document.write("Максимальный элемент находится в диапазоне свыше 100 <br>");
    }
}

displayResult(maxElement);

function repeat(str = '', n = 2) {
    let repeatedStr = '';
    for (let i = 0; i < n; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}

document.write(repeat("hi"));
document.write(repeat("ho", 4));
repeat(str = '', n = 2);

const computeResult = (a, b, c) => a * b / c;

document.write("<br> Результат: " + computeResult(2,4,5));