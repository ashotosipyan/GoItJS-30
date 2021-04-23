import "./styles/styles.scss";

import template from "./templates/main.hbs";

import testData from "./data/data.json";

import LocalStorageWrapper from "./js/utils";

import _ from "lodash";

let tmpUserName = "";

window.onload = () => {
  const container = document.getElementById("container");

  const localStorageWrapper = new LocalStorageWrapper();

  const userName = localStorageWrapper.checkUser();

  if (userName) {
    const newData = Object.assign({}, testData, { name: userName });
    container.innerHTML = template(newData);
  } else {
    container.innerHTML = template(testData);
    const nameInput = document.getElementById("nameInput");
    const saveName = document.getElementById("saveUser");

    nameInput.addEventListener(
      "input",
      _.debounce(e => {
        tmpUserName = e.target.value;
      }, 300)
    );

    saveName.addEventListener("click", e => {
      localStorageWrapper.addUser(tmpUserName);
      const newData = Object.assign({}, testData, { name: tmpUserName });
      container.innerHTML = template(newData);
    });
  }
};
