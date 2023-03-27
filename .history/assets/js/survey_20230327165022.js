const survey = {
    items: {
        0: {
            heading: "Bạn biết tới Duolingo từ đâu?";
            choices: {
                0: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg",
                    desc: "TV"
                },

                1: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/947546a876aaea3a9811abf4cca1b618.svg",
                    desc: "Bạn bè/Gia đình"
                },

                2: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/0d0c3c81ccd1fd2ea84371e6bf4546b3.svg",
                    desc: "Tin tức/Báo chí"
                },

                3: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/8e3f5e058dd4dd5eb43646c2d1f19b3c.svg",
                    desc: "Tìm kiếm Google"
                },

                4: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/9eb3a5707704c76b653a5e85fbf9ca0e.svg",
                    desc: "Facebook/Instagram"
                },

                5: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/f2969a78ee365da5e7676dc6afd8c1b4.svg",
                    desc: "TikTok"
                },

                6: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/5ae4d4bc2af930b5bc002b5d0b7cbad7.svg",
                    desc: "Youtube"
                },

                7: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/d4419d84cb57b1295591e05cd60e45fb.svg",
                    desc: "Khác"
                }

            }
        }
    }
}

async function test() {
    console.log("work2");
    const res = await fetch(
        "https://apizingmp3.vercel.app/api/video?id=Z66IU9I6"
    );
    const { data } = await res.json();
    console.log(data);
}
console.log("work1");
test();
