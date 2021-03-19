/*
--- Сортировка примитивов ---
1.Выполнить сортировку массива цен по убыванию и возрастанию.
*/

const prices = [1000, 240, 670, 360, 89, 20];

// -1 1 0

// prices.sort((a, b) => {
//   console.log({ a, b });
//   return a - b;
// });

// prices.sort((a, b) => {
//   return b - a;
// });

// console.log(prices);

// -------------------

/* 
--- Сортировка строк ---
2. Выполнить сортировку массива названий мониторов в алфавитном и 
обратном 
алфавитном порядке.
*/

const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ", "ACER"];

// const sorted = monitors.sort();

// monitors.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }

//   return 0;
// });

// console.log(monitors);
// console.log(sorted);

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

const items2 = [...items];

const sorted = items2.sort((a, b) => {
  return a.price - b.price;
});

console.log(sorted);

// -------------------

/*
--- Метод Array.prototype.flatMap ---
4.Собрать в allTopics массив всех предметов всех 
курсов используя flatMap.
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

const allTopics = courses.flatMap(course => course.topics);

// const uniqueTopics = allTopics.filter(
//   (value, index, self) => self.indexOf(value) === index
// );

// const alternative = [...new Set(allTopics)];

// console.log(allTopics);

// console.log(alternative);

// console.log(uniqueTopics);

// -------------------

/* 
--- Чейнинг методов ---
5. Выполнить рефакторинг используя цепочку методов flatMap и filter */

// const uniqueValues = courses
//   .flatMap(course => course.topics)
//   .filter((value, index, self) => self.indexOf(value) === index);

// console.log(uniqueValues);

// -------------------

/* 
--- Метод Array.prototype.map ---
6. Используя функцию map назначить скидку 20% на фрукты в масиве, 
назначить id для каждого продукта
*/

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 }
];

const discountedFruits = fruits.map((fruit, index) => {
  return { id: index + 1, name: fruit.name, price: fruit.price * 0.8 };
});

// console.log(discountedFruits);

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

const sumOfYears = workers.reduce((acc, currentVal, currentIndex, self) => {
  console.log(acc);
  return acc + currentVal.years;
}, 0);

console.log(sumOfYears);

// -------------------
