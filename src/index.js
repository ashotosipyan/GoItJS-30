import { getPhotos } from "./js/requests";
import LocalStorageWrapper from "./js/utils";
import "./styles/styles.scss";
import template from "./templates/main.hbs";
import { test } from "./js/requests";

let state = [];

window.onload = async () => {
  // const x = await test("POST", {
  //   title: "fugiat veniam minus11111",
  //   completed: false
  // });

  // if (x) {
  //   state.push(x);
  // }

  const arr = { a: 1, b: 2 };

  // arr = { a: 3 };

  arr.c = 3;

  console.log(arr);
};
