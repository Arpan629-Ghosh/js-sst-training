async function loadData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    console.log("HTTP Error:", response.status);
    return;
  }

  let data = await response.json();
  console.log(data);
}

loadData();
