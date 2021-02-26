// 1) Напиши скрипт, который, для объекта user,
// последовательно:

// a. добавляет поле mood со значением 'happy'
// b. заменяет значение hobby на 'skydiving'
// c. заменяет значение premium на false
// d. выводит содержимое объекта user в формате
// ключ:значение
// используя Object.keys() и for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true
};

function changeUser(obj) {
  obj.mood = "happy";
  obj.hobby = "skydiving";
  obj.premium = false;

  for (const key of Object.keys(obj)) {
    // console.log(`${obj[key]}`);
  }

  return obj;
}

// console.log(changeUser(user));

// -----------------------

// 2) У нас есть объект, в котором хранятся
// зарплаты нашей команды.
// Напишите код для суммирования всех зарплат
// и сохраните результат в переменной sum.
// Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (const salary of Object.values(salaries)) {
  sum += salary;
}

// console.log(sum);

// -----------------------

// 3) Напишите ф-цию calcTotalPrice(stones, stoneName),
// которая принимает массив
// обьектов и строку с названием камня.
// Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из
// обьекта

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 }
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone["name"] === stoneName) {
      return stone["price"] * stone["quantity"];
    }
  }
}

// console.log(calcTotalPrice(stones, "Щебень"));

// -----------------------

// 4) Создайте объект calculator (калькулятор)
// с тремя методами:

// a. read(a, b)- запрашивает два значения и
// сохраняет их как свойства объекта.
// b. sum() - возвращает сумму сохранённых значений.
// c. mult() - перемножает сохранённые
// значения и возвращает результат.

const calculator = {
  value1: 0,
  value2: 0,
  read(a, b) {
    this.value1 = a;
    this.value2 = b;
  },
  sum() {
    return this.value1 + this.value2;
  },
  mult() {
    return this.value1 * this.value2;
  }
};

// calculator.read(3, 4);
const { value1, value2 } = calculator;
// console.log({ value1, value2 });

// console.log(calculator.sum());
// console.log(calculator.mult());

// -----------------------

// 5) Напишите функцию, которая принимает
// объект и возвращает
// новый объект без указанного параметра

// Ожидаемый результат - ({ a: 1, b: 2 }, 'b') => { a: 1 }

const newObj = (obj, ...args) => {
  console.log({ args });
  let newObj = { ...obj };

  console.log(newObj);

  for (const arg of args) {
    delete newObj[arg];
  }

  return newObj;
};

// console.log(newObj({ a: 1, b: 2 }, "b", "c", "d"));

// const x = { a: 1, b: 2 };

// delete x.a;

// console.log({ x });

// -----------------------

// 6) Напишите функцию которая принимает
// как параметр объект и формирует
// объекты в новом масиве в формате [key, value]

// const objData = {
//   name: "John",
//   surName: "Stones",
//   age: 25,
//   hobby: "football",
//   merried: false
// };

// function getNewValues(obj) {
//   const { name, surName, age, hobby, merried } = obj;

//   let arr = [];

//   arr.push({ name }, {surName}, {age}, {hobby}, {merried} });

//   console.log(arr);
// }

// getNewValues(objData);

// -----------------------

// 7) Напиши скрипт управления личным
// кабинетом интернет банка.
// Есть объект account в котором необходимо
// реализовать методы для работы
// с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(type, amount) {
    return {
      type,
      amount
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transactionType = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(transactionType);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи
   * сообщение
   * о том, что снятие такой суммы не возможно,
   *  недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return "Снятие такой суммы не возможно, недостаточно средств";
    } else {
      this.balance -= amount;
      const transactionType = this.createTransaction(
        Transaction.WITHDRAW,
        amount
      );
      this.transactions.push(transactionType);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const [index, transaction] of this.transactions.entries()) {
      if (index === id) {
        return transaction;
      }
    }
    // for (let i = 0; i < this.transactions.length; i++) {
    //   if (i === id) {
    //     return transaction[i];
    //   }
    // }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории
   * транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (transaction of this.transactions) {
      if (transaction["type"] === type) {
        sum += transaction["amount"];
      }
    }

    return sum;
  }
};

account.deposit(1000);
account.deposit(2000);
account.withdraw(500);

console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log({ balance: account.balance, transactions: account.transactions });
