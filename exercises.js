/* 1. Напиши класс User для создания пользователя со 
следующим свойствами:

a. username - имя, строка
b. age - возраст, число
c. numberOfPosts - кол-во постов, число
d. Класс ожидает 1 параметр - объект настроек с 
одноимёнными свойствами.

Добавь метод getInfo(), который, возвращает строку: 
User ${имя} is ${возраст} years old 
and has ${кол-во постов} posts. */

const User = function (obj) {
  this.username = obj.username;
  this.age = obj.age;
  this.numberOfPosts = obj.numberOfPosts;

  this.getInfo2 = function () {
    return `User ${this.username} is ${this.age} 
  years old and has ${this.numberOfPosts} posts.`;
  };
};

// User.prototype.getInfo = function () {
//   return `User ${this.username} is ${this.age}
//   years old and has ${this.numberOfPosts} posts.`;
// };

// const user1 = new User({ username: "Ашот", age: 27, numberOfPosts: 10 });

// console.log(user1.getInfo());
// -----------------

/* 2. Напиши класс Storage который создаёт объекты 
для управления складом товаров. 
При вызове будет получать один аргумент - начальный 
массив товаров, и записывать его в свойство items.

Добавь методы класса:

a. getItems() - возвращает массив товаров.
b. addItem(item) - получает новый товар и добавляет 
его к текущим.
c. removeItem(item) - получет товар и, если он есть, 
удаляет его из текущих. */

const Storage = function (arr) {
  this.items = arr;

  this.getItems = function () {
    return this.items;
  };

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    const index = this.items.indexOf(item);

    if (index > -1) {
      this.items.splice(index, 1);
    } else {
      console.warn("Данный товар не найден");
    }
  };
};

const storage1 = new Storage(["Item1", "Item2", "Item3", "Item4"]);

// console.log(storage1.getItems());

// storage1.addItem("Item5");

// console.log(storage1.getItems());

// storage1.removeItem("Item2");

// console.log(storage1.getItems());

// storage1.removeItem("Item22222");

// console.log(storage1.getItems());

// -----------------

/* 3. Напиши класс Client который создаёт объект 
со свойствами login и email. 
Объяви приватные свойства #login и #email, 
доступ к которым сделай 
через геттер и сеттер login и email. */

class Client {
  #login = "";
  #email = "";

  get getData() {
    return {
      login: this.#login,
      email: this.#email
    };
  }

  set login1(data) {
    this._login = data;
  }

  set changeEmail(data) {
    if (data.includes("@")) {
      this.#email = data;
    } else {
      console.error("Это не email");
    }
  }
}

const client1 = new Client();

// console.log(client1);

// console.log(client1.getData);

// client1.login1 = "username1";

// console.log(client1.getData);

// client1.changeEmail = "testtest.com";

// console.log(client1.getData);

// -----------------

/* 4. Напиши класс Notes который управляет коллекцией 
заметок в свойстве items. 
Заметка это объект со свойствами text и priority. 
Добавь классу статическое свойство Priority, 
в котором будет храниться объект с приоритетами. 

Добавь методы addNote(note), removeNote(text) и 
updateNotePriority(text, newPriority). */

class Notes {
  constructor() {
    this.items = [];
  }

  static priority() {
    return {
      HIGH: "high",
      LOW: "low"
    };
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = this.items.findIndex(item => item.text === text);
    this.items.splice(index, 1);
  }

  updateNote(text, newPriority) {
    const index = this.items.findIndex(item => item.text === text);

    this.items.splice(index, 1, { text, priority: newPriority });
  }
}

// console.log(Notes.priority());

const note1 = new Notes();

note1.addNote({ text: "Note1", priority: Notes.priority().LOW });
note1.addNote({ text: "Note2", priority: Notes.priority().LOW });
note1.addNote({ text: "Note3", priority: Notes.priority().HIGH });

// console.log(note1);

// note1.removeNote("Note2");

// console.log(note1);

// note1.updateNote("Note1", Notes.priority().HIGH);

// console.log(note1);

// -----------------

/*
  5. Создать класс Worker у которого есть 
  свойства name, surname, age, position, salary.
     У класса Worker есть метод getSalary.
     Создать класс TopLevelWorker у которого есть 
     свойство hierarchyLevel и который 
     наследует класс Worker, добавляя метод getHierarchyLevel

     Реализовать задачу с помощью ES5 прототипов и ES6 классов
*/

const HIERARCHY_LEVEL = {
  TOP: "top",
  BOTTOM: "bottom"
};

// ES5

const Worker = function (name, surname, age, position, salary) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.position = position;
  this.salary = salary;
};

Worker.prototype.getSalary = function () {
  return this.salary;
};

const TopLevelWorker = function (
  name,
  surname,
  age,
  position,
  salary,
  hierarchyLevel
) {
  Worker.call(this, name, surname, age, position, salary);
  this.hierarchyLevel = hierarchyLevel;
};

TopLevelWorker.prototype = Object.create(Worker.prototype);
TopLevelWorker.prototype.constructor = TopLevelWorker;

const worker1 = new TopLevelWorker(
  "Ашот",
  "Осипян",
  27,
  "Developer",
  100,
  HIERARCHY_LEVEL.BOTTOM
);

console.log(worker1.getSalary());

console.log(worker1);

// ES6

class Worker1 {
  constructor(name, surname, age, position, salary) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class TopLevelWorker1 extends Worker1 {
  constructor(name, surname, age, position, salary, hierarchyLevel) {
    super(name, surname, age, position, salary);
    this.hierarchyLevel = hierarchyLevel;
  }
}

const worker2 = new TopLevelWorker1(
  "Ашот",
  "Осипян",
  27,
  "Developer",
  100,
  HIERARCHY_LEVEL.BOTTOM
);

console.log(worker2.getSalary());
