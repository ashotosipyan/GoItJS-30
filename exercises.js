/*
--- Сортировка примитивов ---
1.Выполнить сортировку массива цен по убыванию и возрастанию.
*/

// -------------------

/* 
--- Сортировка строк ---
2. Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.
*/

const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];

// -------------------

/*
--- Сортировка сложных типов ---
3. Выполнить сортировку массива объектов:

a. по возрастанию и убыванию значения свойства price.
b. по имени в алфавитном и обратном алфавитном порядке. 
*/

const items = [
  { name: "SAMSUNG", price: 15000 },
  { name: "LG", price: 9000 },
  { name: "ASUS", price: 27000 },
  { name: "DELL", price: 12000 },
  { name: "BENQ", price: 7000 }
];

// -------------------

/*
--- Метод Array.prototype.flatMap ---
4.Собрать в allTopics массив всех предметов всех курсов используя flatMap.
Используя Array.prototype.filter выполнить фильтрацию, 
оставив в uniqueTopics только уникальные элементы.
*/

const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"]
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"]
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Functions",
      "Conditions",
      "Classes",
      "DOM",
      "Git",
      "GitHub"
    ]
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Promises",
      "AJAX",
      "Git",
      "GitHub"
    ]
  }
];

// -------------------

/* 
--- Чейнинг методов ---
5. Выполнить рефакторинг используя цепочку методов flatMap и filter.
*/

// -------------------

/* 
--- Метод Array.prototype.map ---
6. Используя функцию map назначить скидку 20% на фрукты в масиве, 
назначить id для каждого продукта
*/

// -------------------

/* 
--- Метод Array.prototype.reduce ---
7. Используя функцию reduce узнать общие годы практики в объекте workers
*/

const workers = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  }
];

// -------------------
