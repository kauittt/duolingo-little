async function getData() {
    try {
        // const res = await fetch("./session5.json");
        // const data = await res.json();
        // console.log(data);
        console.log("data");
    } catch (error) {
        console.log(error);
    }
}

fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

// getData();
console.log("learn");
