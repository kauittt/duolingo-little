async function getData() {
    const res = await fetch("./^data/session1-1.json");
    const data = await res.json();
    console.log(data);
}
