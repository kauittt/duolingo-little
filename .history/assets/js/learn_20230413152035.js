async function getData() {
    try {
        console.log("1");
        const res = await fetch("./data.json");
        const data = await res.json();
        // console.log(data);
        // console.log(object);
        console.log(data);
        console.log("data");
    } catch (error) {
        console.log(error);
    }
}

getData();
console.log("learn");
