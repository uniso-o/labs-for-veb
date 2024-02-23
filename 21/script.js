class Student {
    constructor (firstName, lastName, group, department, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.department = department;
        this.gender = gender;
    }
    
}
let student1 = new Student("Валерия", "Гейшалева", "Группа 0К9491", "Отделение электроники", "Женский");
let student2 = new Student("Александр", "Петров", "Группа 3К9391", "Отделение компьютерных технологий", "Мужской")
document.write(student1.firstName + "<br>"); 
document.write(student2.lastName + "<br>");  
document.write(student1.group + "<br>");      
document.write(student2.department + "<br>"); 
document.write(student1.gender + "<br>");     
document.write(student2.gender + "<br>");     



let firstName = prompt("Введите имя студента:");
let lastName = prompt("Введите фамилию студента:");
let group = prompt("Введите группу студента:");
let department = prompt("Введите отделение студента:");
let gender = prompt("Введите пол студента (Мужской/Женский):");
let student = new Student(firstName, lastName, group, department, gender);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.group);
console.log(student.department);
console.log(student.gender);

document.getElementById("btn1").addEventListener("click",()=>{
    convertToJson(student1,"content")
})
function convertToJson(student, id) {
    let studentJson = JSON.stringify(student);
    let contentDiv = document.getElementById(id);
    contentDiv.innerHTML = '<pre>' + studentJson + '</pre>';
}


let studentJson = '{"firstName":"Валерия","lastName":"Гейшалева","group":"Группа 0К9491","department":"Отделение электроники","gender":"Женский"}'

function convertToObject() {
    let studentObj = JSON.parse(studentJson);
    let student1 = new Student(studentObj.firstName, studentObj.lastName, studentObj.group, studentObj.department, studentObj.gender);
    let contentDiv = document.getElementById("content");
    contentDiv.innerText =  JSON.stringify(student1, null, 4) ;
}

let jsonString = '{"firstName":"костя","lastName":"абрамов","age":10,"email":"kostabram@gmail.com"}';

console.log(jsonString); 
