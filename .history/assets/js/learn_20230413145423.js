async function getData() {
    try {
        const res = await fetch("../data/session1-1.json");
        // const data = await res.json();
        // console.log(data);
        console.log();
        console.log("data");
    } catch (error) {
        console.log(error);
    }
}

getData();
console.log("learn");
