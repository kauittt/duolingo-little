async function getData() {
    try {
        const res = awat fetch("../data/session5.json");
        // const data = await res.json();
        // console.log(data);
        console.log("data");
    } catch (error) {
        console.log(error);
    }
}

getData();
console.log("learn");
