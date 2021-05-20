import { BASE_URL } from "./constants.js";

export const getPhotos = () => {
  return fetch(`${BASE_URL}/photos`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .catch(err => console.log(err));
};

export const test = async (methodType, data = null, toDoID = null) => {
  let baseUrl = "https://jsonplaceholder.typicode.com/todos/";

  if (methodType !== "POST") {
    baseUrl = `${baseUrl}${toDoID}`;
  }
  console.log(baseUrl);
  try {
    const test = await fetch(baseUrl, {
      method: methodType,
      headers: {
        "Content-Type": "application/json"
      },
      body: data ? JSON.stringify(data) : null
    });

    if (test.status === 201) {
      return test.json();
    } else {
      return test.status;
    }
  } catch (error) {
    console.log(error);
  }
};
