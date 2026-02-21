async function loadData() {
  let response = await fetch("missing.json");

  if (!response.ok) {
    console.log("HTTP Error:", response.status);
    return;
  }

  let data = await response.json();
  console.log(data);
}

loadData();
