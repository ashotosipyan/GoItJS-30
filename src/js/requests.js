const doRequests = async (methodName, bodyData = null, todoID = null) => {
  let baseUrl = "https://60a6ad00b970910017eb2287.mockapi.io/todos/";

  if (methodName !== "GET" && methodName !== "POST") {
    baseUrl = `https://60a6ad00b970910017eb2287.mockapi.io/todos/${todoID}`;
  }

  try {
    const request = await fetch(baseUrl, {
      method: methodName,
      headers: {
        "Content-Type": "application/json"
      },
      body: bodyData ? JSON.stringify(bodyData) : null
    });

    if (request.status === 200 || request.status === 201) {
      return request.json();
    } else {
      alert(request.status);
    }
  } catch (error) {
    console.log(error);
  }
};

export default doRequests;
