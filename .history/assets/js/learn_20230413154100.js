async function getData() {
    const res = await fetch("./assets/js/data.json");
    const data = await res.json();
    console.log(data);
}

getData();
