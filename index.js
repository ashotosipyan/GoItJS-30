/* 

1. С использованием значений массива создать 
маркированный список.
 Создать кнопки 'добавить' и 'удалить', 
 которые будут 
 менять состав списка.
 Для оптимизации списка нужно добавить кастомный 
 атрибут id. 
 В списке четное значение должно красится красным 
 а не четные в синим цветом.

*/

// const cars = ["Mercedes", "BMW", "Volvo"];

// const ulList = document.createElement("ul");

// ulList.id = "carsContainer";

// const parentContainer = document.getElementById("container");

// parentContainer.append(ulList);

// const renderPage = (newItem = null) => {
//   if (newItem) {
//     const carsContainer = document.getElementById("carsContainer");
//     const newItemLi = document.createElement("li");
//     newItemLi.textContent = newItem;
//     newItemLi.classList.add((cars.length - 1) % 2 === 0 ? "even" : "odd");
//     carsContainer.appendChild(newItemLi);
//   } else {
//     cars.forEach((car, index) => {
//       const liItem = document.createElement("li");
//       liItem.textContent = car;
//       if (index % 2 === 0) {
//         liItem.classList.add("even");
//       } else {
//         liItem.classList.add("odd");
//       }

//       ulList.append(liItem);
//     });
//   }
// };

// renderPage();

// const buttonContainer = document.createElement("div");

// // buttonContainer.setAttribute("id", "btnContainer");
// buttonContainer.id = "btnContainer";

// parentContainer.append(buttonContainer);

// const btnContainer = document.getElementById("btnContainer");

// const addInput = document.createElement("input");

// addInput.id = "addInput";

// btnContainer.append(addInput);

// addInput.style.display = "block";
// addInput.style.marginBottom = "10px";

// const btnAdd = document.createElement("button");

// btnContainer.append(btnAdd);

// btnAdd.style.marginRight = "10px";

// btnAdd.textContent = "Добавить";

// const btnRemove = document.createElement("button");

// btnContainer.append(btnRemove);
// btnRemove.textContent = "Удалить";

// btnAdd.addEventListener("click", event => {
//   const input = document.getElementById("addInput");
//   if (input.value) {
//     cars.push(input.value);
//     renderPage(input.value);
//     input.value = "";
//   }
// });

// btnRemove.addEventListener("click", () => {
//   const ulList = document.getElementById("carsContainer");
//   ulList.removeChild(ulList.lastElementChild);
// });

/*

2. В форме авторизации пользователь должен ввести 
логин и пароль для входа в систему.
  - кнопка 'Войти' становится активной только в том 
    случае когда заполнены оба поля и пользователь отметил 
    чекбокс
  - поле логин должно содержать значение минимум 4 символа
  - поле пароль от 8-30 символов
  - если условия не соответствуют требованиям то 
    при потере фокуса поле ввода показывает ошибку
  - после нажатия кнопки Войти надо вывести сообщение 
    об успешной авторизацие

*/

// const login = document.querySelector("#login");
// const password = document.querySelector("#password");
// const checkBox = document.querySelector("#checkBox");
// const submitButton = document.querySelector("#submitButton");
// const msgBox = document.querySelector("#msgBox");

// const loginInfo = document.querySelector("#loginInfo");
// const passwordInfo = document.querySelector("#passwordInfo");

// login.addEventListener("focus", e => {
//   loginInfo.style.display = "block";
// });

// login.addEventListener("blur", e => {
//   loginInfo.style.display = "none";
//   if (login.value.length < 4) {
//     login.classList.add("error");
//   } else {
//     // Вариант 1
//     if (login.classList.contains("error")) {
//       login.classList.remove("error");
//     }
//   }
// });

// password.addEventListener("focus", e => {
//   passwordInfo.style.display = "block";
// });

// password.addEventListener("blur", e => {
//   passwordInfo.style.display = "none";
//   if (password.value.length < 8 || password.value.length > 30) {
//     password.classList.add("error");
//   } else {
//     // Вариант 2
//     password.classList.remove("error");
//   }
// });

// submitButton.addEventListener("click", e => {
//   e.preventDefault();
//   if (
//     login.classList.contains("error") ||
//     password.classList.contains("error") ||
//     !checkBox.checked
//   ) {
//     msgBox.innerHTML = "Условия не соответствуют требованиям!";
//   } else {
//     msgBox.innerHTML = "Авторизация прошла успешно!";
//   }
// });

/* 

3. Создать небольшую игру :)
  - Изначально на экране пользователя будет отображаться какая 
    нибудь форма (круг, квадрат, прямоугольник)
  - при нажатии на нее в рандомном порядке форма должна 
  менятся на другую
  - форма каждый раз должна появляться в разных местах 
  а странице
  - цвет формы в рандомном порядке меняется, 
    используя цвета из заранее заготовленного массива
  
*/

const forms = [
  "width: 100px; height: 100px; border-width: 1px; border-color: #000000",
  "width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000",
  "width: 150px; height: 100px; border-width: 1px; border-color: #000000"
];

const colors = ["red", "blue", "green"];

const randomizer = max => {
  return Math.floor(Math.random() * max);
};

const renderForm = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const newForm = document.createElement("div");
  newForm.id = "form";

  newForm.style.cssText = forms[randomizer(forms.length)];
  newForm.style.backgroundColor = colors[randomizer(colors.length)];
  newForm.style.position = "absolute";
  newForm.style.top = `${randomizer(100)}%`;
  newForm.style.left = `${randomizer(100)}%`;

  newForm.addEventListener("click", () => {
    renderForm();
  });

  container.append(newForm);
};

const formContainer = document.getElementById("form");

console.log(formContainer);

document.addEventListener("DOMContentLoaded", () => {
  renderForm();
});

window.addEventListener("beforeunload", e => {
  e.preventDefault();
  return (e.returnValue = "Вы уверены?");
});
