async function getData(index) {
    const res = await fetch("http://localhost:3000/duolingo-session1"); // TRUE
    //? Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    const data = await res.json();
    console.log(data);
    console.log([...data][index]);
    return data[index];
}
getData();
