let obj1 = {
    name:"Миша",
    age:15,
    course:1,
    group: "3К9291",
    speciality: "ПМС",
};

obj1.greet = function() {
    let message = 'Здравствуйте,';
    for(let prop in this) { 
    if(this.hasOwnProperty(prop) && (typeof this[prop] !=="function")) { 
    if (prop.length===0) {
    message +=`
    ${prop}: no${this[prop]}`;
    } else message +=`
    ${prop}: ${this[prop]}`;
    }
    }
    alert(message);
    
};

obj1.greet();
function Info(name, age, course, group,speciality) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.group = group;
    this.speciality = speciality;
};
  
let obj2 = new Info("Лера", 19, 4, "0K9491", "ЭВС");

for (let key in obj1) {
    console.log( key );
}
for (let keys in obj2){
    console.log (obj2[keys]);
}

document.write("<h4>Информация</h4>");
document.write("<div>Имя: " + obj2.name + "</div>");
document.write("<div>Возраст: " + obj2.age + "</div>");
document.write("<div>Курс: " + obj2.course + "</div>");
document.write("<div>Группа: " + obj2.group + "</div>");
document.write("<div>Специальность: " + obj2.speciality+ "</div> <hr>");

let Sotrudnik = {
    name: '',
    department: '',
    phone: '',
    salary: '' ,
  
    getName() {
      return this.name;
    },
    getDepartment() {
      return this.department;
    },
    getPhone() {
      return this.phone;
    },
    getSalary() {
      return this.salary;
    },
  
    setName(newName) {
      this.name = newName;
    },
    setDepartment(newDepartment) {
      this.department = newDepartment;
    },
    setPhone(newPhone) {
      this.phone = newPhone;
    },
    setSalary(newSalary) {
      this.salary = newSalary;
    }
  };
  
  Sotrudnik.setName('Константин');
  Sotrudnik.setDepartment('Веб-дизайн');
  Sotrudnik.setPhone('+375292289970');
  Sotrudnik.setSalary('1500руб.');
  document.write('Имя: ' + Sotrudnik.getName() + '<br>');
  document.write('Отдел: ' + Sotrudnik.getDepartment() + '<br>');
  document.write('Телефон: ' + Sotrudnik.getPhone() + '<br>');
  document.write('Зарплата: ' + Sotrudnik.getSalary() + '<br>')

  let obj3 = {
    name: "Kolya",
    age: 25
  };
  let obj4 = Object.assign({}, obj3); 
  console.log(obj3); 
  console.log(obj4); 
