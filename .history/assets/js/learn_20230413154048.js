async function getData() {
    console.log("1");
    const res = await fetch("./assets/js/data.json");
    const data = await res.json();
    console.log(data);
    console.log("data");
}

getData();
console.log("learn");
