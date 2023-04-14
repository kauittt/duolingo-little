async function getData() {
    const res = await fetch("./assets/data/session5.json"); // TRUE

    // const res = await fetch("../data/session5.json");
    //? Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    const data = await res.json();
    console.log(data);
}
getData();
