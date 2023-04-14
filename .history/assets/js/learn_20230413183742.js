async function getData() {
    const res = await fetch("http://localhost:3000/duolingo-session1"); // TRUE
    //? Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    const data = await res.json();
    return data;
}
getData();
