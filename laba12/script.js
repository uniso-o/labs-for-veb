let obj1 = {
  name: "Leha",
  age: 25,
  sex: "Male",
  profession: "Engineer",
  isMarried: false,

  displayInfo: function () {
    document.write("Привет, незнакомец! Я объект obj1. <br>");  
    document.write("Мои свойства:");
    for (let prop in this) {
      if (typeof this[prop] !== "function") {
        document.write(prop);
      }
      document.write("<br>");
    }
  },
};
obj1.displayInfo();

let obj2 = {};
obj2["name"] = "Nastya";
obj2.age = 30;
Object.assign(obj2, { sex: "Female", profession: "Teacher" });
obj2.isMarried = true;

document.write("Объект obj2: <br>");
for (let prop in obj2) {
  document.write(prop + ": " + obj2[prop] + "<br>");
}


class emloyer {
    constructor(user, department, phone, salary) {
      this.user = user;
      this.department = department;
      this.phone = phone;
      this.salary = salary;
    }
    
    set user(user) {
        this.user = user;
      }
      get user() {
        return this.user;
      }
    
      set department(department) {
        this.department = department;
      }
      get department() {
        return this.department;
      }
      set phone(phone) {
        this.phone = phone;
      }
      get phone() {
        return this.phone;
      }
      set salary(salary) {
        this.salary = salary;
      }
      get salary() {
        return this.salary;
      }
  }
  

  emloyer.user = "Lera";
  emloyer.department = "IT";
  emloyer.phone = "8080";
  emloyer.salary = 5000;
  
   
  document.write("<br>Имя: " + emloyer.user + "<br>");
  document.write("Отдел: " + emloyer.department + "<br>");
  document.write("Телефон: " + emloyer.phone + "<br>");
  document.write("Зарплата: " + emloyer.salary + "<br>");
  
document.write("<br> Произвольный объект <br>");
let user = {
  name: "kolya",
  age: 25,
  sex: "Male",
  profession: "Engineer",
  isMarried: false,
};
let clone = Object.assign({}, user);
for (let prop1 in user) {
  document.write(prop1 + ": " + user[prop1] + "<br>");
}
document.write("<br> Его копия <br>");
for (let prop2 in clone) {
  document.write(prop2 + ": " + clone[prop2] + "<br>");
}

