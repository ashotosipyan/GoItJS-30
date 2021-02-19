// Модуль 2. Занятие 1. Массивы и функции

// Задача 1

// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика».
// 4. Удалите первый элемент и выведите его в консоль.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// Массив по ходу выполнения операций:

// a. Джаз, Блюз
// b. Джаз, Блюз, Рок-н-ролл
// c. Джаз, Классика, Рок-н-ролл
// d. Классика, Рок-н-ролл
// e.Рэп, Регги, Классика, Рок - н - ролл;

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// console.log("1", styles);

// styles.splice(1, 1, "Классика");

// console.log("2", styles);

// const first = styles.shift();

// console.log(first);

// console.log("3", styles);

// styles.unshift("Рэп", "Регги");

// console.log("4", styles);

// --------------------

// Задача 2

// Напишите функцию min(a,b), которая возвращает
// меньшее из чисел a и b.

// function min(a, b) {
//   if (a === b) {
//     return "Цифры равны";
//   }

//   return a > b ? b : a;
// }

// console.log(min(2, 2));

// --------------------

// Задача 3

// Напишите функцию logItems(array), которая получает
// массив и использует цикл for,
// который для каждого элемента массива будет выводить
// в консоль сообщение в формате
// <номер элемента> - <значение элемента>.
// Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом
// 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const x = ["Mango", "Poly", "Ajax"];

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(x);

// --------------------

// Задача 4

// Вернуть отсортированную копию по алфавиту
// (не меняя исходный массив)
// не использовать Array.prototype.sort()

const ex4 = [2, 65, 89];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("1", arr[i]);
    for (let j = 0; j < arr.length; j++) {
      console.log("2", arr[j]);
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

// console.log(bubbleSort(ex4));

// --------------------

// Задача 5

// Напиши функцию findSmallestNumber(numbers)которая
// ищет самое маленькое число в массиве.

const ex5 = [104, 67, 54, 89, 2, 19];

function findSmallestNumber(arr) {
  let min = arr[0];

  for (number of arr) {
    if (min > number) {
      min = number;
    }
  }

  return min;
}

// console.log(findSmallestNumber(ex5));

// --------------------

// Задача 6

// Напиши функцию calculateAverage()
// которая принимает произвольное кол-во
// аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.

function calculateAverage() {
  const args = arguments;
  let sum = 0;
  let arrLength = 0;
  for (arg of args) {
    if (typeof arg !== "number") {
      continue;
    } else {
      sum += arg;
      arrLength++;
    }
  }

  return sum / arrLength;
}

// console.log(calculateAverage(1, 2, 3, 4, "number"));

// --------------------

// Модуль 2. Занятие 2. Массивы и функции

// Задача 7

// Напиши функцнию findLongestWord(string)
// которая принимает произвольную строку
// состоящую только из слов разделённых
// пробелом (параметр string)
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  const splitedArr = string.split(" ");
  let longest = splitedArr[0];

  for (text of splitedArr) {
    debugger;
    if (text.length > longest.length) {
      longest = text;
    }
  }

  return longest;
}

findLongestWord("Всем привет, я Ашот");

// ----------------------

// Задача 8

// Напишите функцию greet(name), которая
// при вызове будет получать имя (например, «Василий»)
// и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»

function greet(name) {
  return name ? `Привет, ${name}` : "Привет, гость";
}

// console.log(greet());

// ----------------------

// Задача 9

// Напишите функцию findTheColor()
// которая принимает название цвета
// и определяет его наличие в масиве.
// Аргумент должен быть строкой.

const colors = ["red", "green", "blue"];

function findTheColor(colorName) {
  if (typeof colorName !== "string") {
    return "Допускается только строка";
  }

  if (colors.includes(colorName)) {
    return "Цвет найден";
  } else {
    return "Цвет не найден";
  }
}

console.log(findTheColor(2));

// ----------------------

// Задача 10

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

function checkNumbers(a, b) {
  if (a > b) {
    return `число ${a} больше ${b}`;
  }

  return `число ${b} больше ${a}`;
}

const checkNumbers2 = (a, b) => {
  return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;
};

console.log(checkNumbers2(1, 2));

// ----------------------

// Задача 11

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

function mult(x, y, z) {
  return x * y * z;
}

const mult2 = (x, y, z) => x * y * z;

console.log(mult2(2, 3, 4));

// ----------------------

// Задача 12

// Напишите функции для работы с коллекцией обучающих
// курсов courses:

// 1. addCourse(name) - добавляет курс в конец коллекции
// 2. removeCourse(name) - удаляет курс из коллекции
// 3. updateCourse(oldName, newName)- изменяет имя на новое

const courses = ["HTML", "CSS", "JavaScript", "React"];

const addCourse = name => {
  const x = courses.push(name);
  console.log(x);
  return courses;
};

console.log(addCourse("C++"));

const removeCourse = name => {
  const searchIndex = courses.indexOf(name);
  console.log(searchIndex);
  if (searchIndex !== -1) {
    console.log(courses.splice(searchIndex, 1));
    courses.splice(searchIndex, 1);
  } else {
    return "Данное значение не найдено";
  }

  return courses;
};

console.log(removeCourse("Scala"));

const updateCourse = (oldName, newName) => {
  const searchIndex = courses.indexOf(oldName);

  if (searchIndex !== -1) {
    courses.splice(searchIndex, 1, newName);
  } else {
    return "Данное значение не найдено";
  }

  return courses;
};

console.log(updateCourse("JavaScript", "Typescript"));
