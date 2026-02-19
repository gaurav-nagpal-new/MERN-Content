// fetch("https://jsonplaceholder.typicode.com/todos/3")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log("some error", err));

// console.log("Call happened");
function callAPI(url) {
  let res =  fetch(url);
  let resJson =  res.json();
  console.log(resJson);
}

try {
  callAPI("https://jsonplaceholder.typicode.com/todos/1");
  console.log("Data was fetched sucessfully");
} catch (err) {
  //
}
