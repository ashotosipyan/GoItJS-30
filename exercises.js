const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(type, amount) {
    return {
      type,
      amount
    };
  },

  deposit(amount) {
    this.balance += amount;
    const transactionType = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(transactionType);
  },

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

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const [index, transaction] of this.transactions.entries()) {
      if (index === id) {
        return transaction;
      }
    }
  },

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

// account.deposit(1000);
// account.deposit(2000);
// account.withdraw(500);

// account.getBalance();

// ------------------------

/* 1. Напишите две функции:

a. letMeSeeYourName(callback) - спрашивает имя пользователя 
через prompt и вызывает 
коллбек ф-цию callback
b. greet(name) - коллбек принимающий имя и логирующий в 
консоль строку "Привет" + name */

function letMeSeeYourName(clb) {
  const name = prompt("Как вас зовут?");

  if (name) {
    return clb(name);
  }
}

function greet(name) {
  console.log(`Привет ${name}`);
}

// letMeSeeYourName(greet);

// -------------------------

/* 2. Напишите две функции:

a. makeProduct(name, price, callback) - принимает имя и 
цену товара, а также колбек. 
Функция создаёт обьект товара, добавляя ему уникальный 
идентификатор в свойство id и
 вызывает колбек передавая ему созданный обьект.
b. showProduct(product) - коллбек принимающий обьект 
продукта и логирующий его в консоль */

function makeProduct(name, price, callback) {
  const product = {
    name,
    price
  };

  product.id = Math.random();

  return callback(product);
}

function showProduct(product) {
  // console.log(product);
}

makeProduct("хлеб", 50, showProduct);

// ------------------------

/* 3. Выполните рефакторинг функции makeDishWithShef(shefName, dish) так, 
чтобы не нужно было каждый раз передавать имя шефа. Напишите функцию 
makeShef(shefName), 
которая возвращает другую функцию makeDish(dish), 
помнящую имя шефа при её вызове. */

function makeDishWithShef(shefName, dish) {
  console.log(`Шеф ${shefName} готовит ${dish}`);
}

// makeDishWithShef("Поли", "пирожок");
// makeDishWithShef("Поли", "чай");
// makeDishWithShef("Манго", "тортик");
// makeDishWithShef("Манго", "кофе");

function makeShef(shefName) {
  return function makeDish(dish) {
    console.log(`Шеф ${shefName} готовит ${dish}`);
  };
}

const shef1 = makeShef("Петр");

// console.log(shef1);

// shef1("омлет");
// shef1("рыбу");

// -------------------------------

// 4. Исправьте ошибки чтобы код работал.

const product = {
  price: 5000,
  showPrice() {
    // console.log(this);
    // console.log(this.price);
  }
};

product.showPrice();

// -------------------------------

// 5. Исправьте ошибки чтобы код работал.

const product2 = {
  price: 5000,
  name: "Fish",
  showPrice() {
    console.log(this);
    // console.log(this.price);
  }
};

function callAction(action) {
  console.log(action);
  // console.log(this);
  action();
}

// product2.showPrice();

// callAction(product2.showPrice);

// callAction(product2.showPrice.bind(product2, this));

// -------------------------------

/* 6. Напишите функцию each(array, callback), которая первым 
параметром принимает массив, а вторым - функцию, 
которая применится к каждому 
элементу массива. Функция each должна вернуть 
новый массив, элементами 
которого будут результаты вызова коллбека. */

const each = (array, callback) => {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }

  return newArr;
};

// console.log(each([1, 2, 3], element => element * 2));

// -------------------------------

/* 7. Напишите функцию makeCounter(), которая возвращает 
другую функцию, 
которая считает и логирует количество своих вызовов. */

const makeCounter = () => {
  let total = 0;
  return () => {
    total += 1;
    console.log(total);
  };
};

const x = makeCounter();

// console.log(x);
// x();
// x();
// x();
// x();
// x();
// x();
// x();
// x();

// -------------------------------

/* 8. Напишите функцию savePassword(password) которая принимает 
пароль 
и возвращает внутреннюю функцию, которая принимает строку и 
возвращает 
буль true, если строка совпадает с сохраненным паролем и false 
- если не совпадает. */

const savePassword = pwd => {
  return pwd2 => {
    return pwd === pwd2;
  };
};

const pass = savePassword("password");

// console.log(pass);

// console.log(pass("password"));
// console.log(pass("password1"));
// console.log(pass("password2"));
// console.log(pass("password3"));
// console.log(pass("password4"));

// -------------------------------

/* 9. Напишите функцию для хранения скидки. Функция возвращает 
другую функцию,которая принимает сумму 
покупки и возвращает финальную сумму с сохранённой скидкой. */

const makeDiscount = discount => {
  // return sum => sum - sum * discount;
  return sum => sum - sum * (discount / 100);
};

const discount50 = makeDiscount(50);

console.log(discount50(1000));
