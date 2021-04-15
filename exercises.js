// ------ Переменные и ветвления ---------

// 1. С помощью оператора определения типа убедитесь,
// что переменные принадлежат
// типам: string, number, boolean.

const productName = "Mango";
const pricePerItem = 150;
const isOnSale = false;
const error = null;
let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error);
// console.log(typeof quantity);

// 2. Вывести на экран сумму:
// количество яблок + количество винограда.

const apples = 47;
const grapes = 135;

// const result2 = apples + grapes;

// console.log(result2);

// 3. Создать переменную result,
// присвоить ей выражение 108+223-2*5,
// разобрать приоритет и вывести её значение в консоль.

let result1 = 108 + (223 - 2) * 5;

// console.log(result1);

// 4. Определить площадь круга с радиусом 10см

let radius = 10;

// const sqr = Math.PI * Math.pow(radius, 2);

// console.log(sqr);

// 5. Написать фразу с помощью шаблонных
// строк Здравствуйте, меня зовут А, мне Б лет и
// мне нравится Ц, где А, Б, Ц -
// переменные вставленные в строку.

// const name1 = "Ашот";
// const age1 = 28;
// const hobby1 = "футбол";

// const result2 = `Здравствуйте, меня зовут ${name1},
// мне ${age1} лет и мне нравится ${hobby1}`;

// console.log(result2);

// 6. Каким будет результат этих выражений?

// 'g'.charCodeAt(0);

// console.log(5 > 4);
// console.log(10 >= "7");
// console.log("2" > "12");
// console.log("2" < "12");
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// console.log("Ёнанас" < "ёжик");
// console.log("Ёнанас" === "ёжик");
// console.log(undefined == null);
// console.log(undefined === null);

// 7. Используя конструкцию if..else,
// напишите код, который будет спрашивать:
// «Какое «официальное» название JavaScript?».
// Если пользователь вводит «ECMAScript»,
// то показать: «Верно!», в противном случае – отобразить:
// «Не знаете? ECMAScript!»

// const question = prompt("Какое «официальное» название JavaScript?");

// if (question === "ECMAScript") {
//   console.log("Верно!");
// } else {
//   console.log("Не знаете? ECMAScript!");
// }

// 8. Перепишите if...else с использованием
// тернарного оператора.

// const a = 1;
// const b = 5;
// let result;

// if (a + b < 4) {
//   result = "Мало";
// } else {
//   result = "Много";
// }

// a + b < 4 ? (result = "Мало") : (result = "Много");

// console.log(result);

// 9. Что выведет код?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "hello");

// console.log(true && 0 && "hello");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// 10. Напишите условие if для проверки,
// что переменная age находится в диапазоне между
// 14 и 90 включительно.

// const min = 14;
// const max = 90;
// let age = 14;

// if (age >= min && age <= max) {
//   console.log("Верно");
// } else {
//   console.log("Не верно");
// }

// 11. Написать программу которая получит от
// пользователя число (количество минут) и выведёт
// на экран строку в формате часов и минут.

// пример - 70 покажет 01:10

// const globalMinutes = 61;

// const hours = Math.floor(globalMinutes / 60);

// const modifiedHours = String(hours).padStart(2, 0);

// const minutes = globalMinutes % 60;

// const modifiedMinutes = String(minutes).padStart(2, 0);

// const time = `${modifiedHours}:${modifiedMinutes}`;

// console.log(time);

// -------- Циклы ---------

// 1. Напишите цикл for который выводит в консоль
// браузера числа по возрастанию от min до max.

const min1 = 10;
const max1 = 100;

// i++ i+=1 i-- i-=1

for (let i = min1; i <= max1; i++) {
  //   console.log(i);
}

// 2. Напишите цикл for который выводит в
// консоль браузера числа по убыванию от max до min.

for (let i = max1; i >= min1; i--) {
  //   console.log(i);
}

// 3. При помощи цикла for выведите чётные
// числа от 2 до 10.

const num1 = 2;
const num2 = 10;

// for (let i = num1; i <= num2; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = num1; i <= num2; i += 2) {
//   console.log(i);
// }

// 4. Напишите цикл, который предлагает ввести
// число больше 100 через prompt.
// Если посетитель ввёл другое
// число - попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока посетитель не
// введёт число, большее 100, либо не нажмёт кнопку
// Отмена в промпт.

// let input = prompt("Введите число больше 100");
// let check = false;

// do {
//   if (Number(input) < 100) {
//     check = true;
//     input = prompt("Введите число больше 100");
//   } else {
//     check = false;
//   }
// } while (check);

// 5*. Напишите код, который будет спрашивать
// логин с помощью prompt и логировать результат
// в консоль браузера.

// Если посетитель вводит «Админ»,
// то prompt запрашивает пароль
// Если ничего не введено или нажата
// клавиша Esc – вывести строку «Отменено»
// В противном случае вывести строку «Я вас не знаю»
// Пароль проверять так:

// Если введён пароль «Я главный»,
// то вывести строку «Здравствуйте!»
// Иначе выводить строку «Неверный пароль»

// переписать на switch case
// вложенные проверки переписать на тернар

// const loginInput = prompt("Введите свой логин");

// if (loginInput === "Админ") {
//   const passwordInput = prompt("Введите свой пароль");
//   if (passwordInput) {
//     if (passwordInput === "Я главный") {
//       console.log("Здравствуйте!");
//     } else {
//       console.log("Неверный пароль");
//     }
//   } else {
//     console.log("Отменено");
//   }
// } else {
//   console.log("Я вас не знаю");
// }

// 6. Напиши скрипт который просит
// посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel,
//  и каждый раз добавляет введенное значение
// к общей сумме.

// При загрузке страницы пользователю предлагается
// в prompt ввести число. Ввод добавляется к значению
// переменной total.
// Операция ввода числа продолжается
// до тех пор, пока пользователь не нажмет кнопку
// Cancel в prompt.
// После того как пользователь прекратил ввод нажав
//  кнопку Cancel, показать alert со строкой
// 'Общая сумма чисел равна [сумма]'.
// Делать проверку того, что пользователь ввел
// именно число, а не произвольный набор символов,
// не нужно.

// let inputValue = prompt("Введите число");
// let check = false;
// let total = 0;

// do {
//   if (inputValue) {
//     check = true;
//     total += Number(inputValue);
//     inputValue = prompt("Введите число");
//   } else {
//     check = false;
//     alert(`Общая сумма чисел равна ${total}`);
//   }
// } while (check);

const x = "abb";

console.log(x.indexOf("b"));
