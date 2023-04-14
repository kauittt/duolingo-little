async function getData() {
    try {
        const res = await fetch("./assets/js/data.json");
        const data = await res.json();
        // console.log(data);
        console.log(object);
        console.log("data");
    } catch (error) {
        console.log(error);
    }
}

// getData();
console.log("learn");
