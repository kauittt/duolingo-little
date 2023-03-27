// const survey = {
//     items: {
//         item: {
//             heading: "Bạn biết tới Duolingo từ đâu?";
//             choices: {
//                 choice: {
//                     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg",
//                     desc: "TV"
//                 },

//                 choice: {
//                     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/947546a876aaea3a9811abf4cca1b618.svg",
//                     desc: "Bạn bè/Gia đình"
//                 }

//                 choice: {
//                     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg"
//                     desc: "TV"
//                 }

//                 choice: {
//                     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg"
//                     desc: "TV"
//                 }

//                 choice: {
//                     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg"
//                     desc: "TV"
//                 }

//                 choice: {
//                     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg"
//                     desc: "TV"
//                 }

//                 choice: {
//                     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg"
//                     desc: "TV"
//                 }

//                 choice: {
//                     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg"
//                     desc: "TV"
//                 }

//             }
//         }
//     }
// }

async function test() {
    const res = await fetch(
        "https://apizingmp3.vercel.app/api/video?id=Z66IU9I6"
    );
    const { data } = await res.json();
    console.log(data);
}
test();
