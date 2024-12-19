// const axios = require("axios");

// async function test() {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     // throw new Error("test");
//     console.log(response.data);
//   } catch (error) {
//     console.log(error); // Handles any error (e.g., HTTP error or thrown error)
//   } finally {
//     console.log("finally");
//   }
// }
// test();

//make a new promise ,
const axios = require("axios");

function test() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        // throw new Error("test");
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        console.log("finally");
      });
  });
}

test()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
