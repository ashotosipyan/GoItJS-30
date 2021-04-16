import "./styles/styles.scss";

import sumNumbers from "./js/utils";

import _ from "lodash";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const btn = document.getElementById("sumBtn");

const result = document.getElementById("result");

btn.addEventListener("click", e => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  result.innerHTML = sumNumbers(num1, num2);
});
