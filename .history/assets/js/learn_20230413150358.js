async function getData() {
    try {
        const res = await fetch(
            "C:UsersDELLOneDriveMáy tínhWorkSpaceFront_Endduolingo-littleassetsdatasession1-1.json"
        );
        // const data = await res.json();
        // console.log(data);
        console.log("data");
    } catch (error) {
        console.log(error);
    }
}

getData();
console.log("learn");
