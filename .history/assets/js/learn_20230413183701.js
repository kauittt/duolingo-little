async function getData() {
    const res = await fetch("http://localhost:3000/duolingo-session1"); // TRUE
    console.log(res);
    // const res = await fetch("../data/session5.json");
    //? Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    const data = await res.json();
    console.log(data);
}
getData();
