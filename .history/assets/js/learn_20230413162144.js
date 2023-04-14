async function getData() {
    // const res = await fetch("./assets/js/session5.json");
    const res = await fetch("../data/session5.json");
    const data = await res.json();
    console.log(data);
}
getData();
