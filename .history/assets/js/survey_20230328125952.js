const data = {
    items: {
        0: {
            heading: "Bạn biết tới Duolingo từ đâu?",
            choices: {
                0: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg",
                    heading: "TV",
                },

                1: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/947546a876aaea3a9811abf4cca1b618.svg",
                    heading: "Bạn bè/Gia đình",
                },

                2: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/0d0c3c81ccd1fd2ea84371e6bf4546b3.svg",
                    heading: "Tin tức/Báo chí",
                },

                3: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/8e3f5e058dd4dd5eb43646c2d1f19b3c.svg",
                    heading: "Tìm kiếm Google",
                },

                4: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/9eb3a5707704c76b653a5e85fbf9ca0e.svg",
                    heading: "Facebook/Instagram",
                },

                5: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/f2969a78ee365da5e7676dc6afd8c1b4.svg",
                    heading: "TikTok",
                },

                6: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/5ae4d4bc2af930b5bc002b5d0b7cbad7.svg",
                    heading: "Youtube",
                },

                7: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/d4419d84cb57b1295591e05cd60e45fb.svg",
                    heading: "Khác",
                },
            },
        },
        1: {
            heading: "Tại sao bạn học ngoại ngữ?",
            choices: {
                0: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/23221cb0c6f3000161a43c62db95329a.svg",
                    heading: "Cơ hội nghề nghiệp",
                },

                1: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/cbb1ff58ab02348bfece9033f9fc02b7.svg",
                    heading: "Văn hóa",
                },

                2: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/fbcf7ddad59a2c199b2e5e0b5dc4f601.svg",
                    heading: "Du lịch",
                },

                3: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/c5beffef0ff1a60393cdcb3bfa521644.svg",
                    heading: "Luyện trí não",
                },

                4: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/4fa9bfb1088c948b045e1f134a96c729.svg",
                    heading: "Kết bạn và sẻ chia",
                },

                5: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/5404fff07b7cd0e1244baa3982f2384c.svg",
                    heading: "Học tập",
                },

                6: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/f10fcc23a95fb167ef9a449eed240482.svg",
                    heading: "Khác",
                },
                // ,

                // 7: {
                //     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/d4419d84cb57b1295591e05cd60e45fb.svg",
                //     heading: "Khác",
                // },
            },
        },
        2: {
            heading:
                "Tuyệt vời. Bây giờ bạn hãy chọn mục tiêu luyện tập mỗi ngày.",
            choices: {
                0: {
                    heading: "Dễ",
                    desc: "5 phút / ngày",
                },

                1: {
                    heading: "Vừa",
                    desc: "10 phút / ngày",
                },
                2: {
                    heading: "Khó",
                    desc: "15 phút / ngày",
                },
                3: {
                    heading: "Siêu khó",
                    desc: "20 phút / ngày",
                },
            },
        },
        3: {
            heading:
                "Hãy để Duolingo giúp bạn giữ vững mục tiêu hàng ngày nhé?",
            choices: {
                0: {
                    icon: `<i class="fa-brands fa-facebook"></i>`,
                    heading: "TIẾP TỤC BẰNG FACEBOOK",
                },

                1: {
                    icon: `<i class="fa-brands fa-google"></i>`,
                    heading: "TIẾP TỤC BẰNG GOOGLE",
                },
                3: {
                    icon: null,
                    heading: "KHÔNG PHẢI BÂY GIỜ",
                },
            },
        },
        4: {
            heading: "Chọn hướng đi của bạn",
            choices: {
                0: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/owls/3ddd27fd32d1910636ead35ea966b488.svg",
                    heading: "Đây là lần đầu bạn học Tiếng Anh?",
                    desc: "Bắt đầu từ bài tập cơ bản nhé!",
                },
                1: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/owls/84d58856b19e9d0ec3c59cb014139853.svg",
                    heading: "Bạn đã biết một chút Tiếng Anh?",
                    desc: "Hãy tiếp tục cố gắng nhé!",
                },
            },
        },
    },
};

console.log(data.items);

function loadSurvey() {
    const heading = document.querySelector(".survey-content__heading");
    const grid = document.querySelector(".survey-content-grid");

    const divItem = document.createElement("div");
    divItem.className = "survey-content";

    for (let i = 0; i < 1; i++) {
        const item = data.items[i];

        switch (i) {
            case (0, 1):
                break;

            default:
                break;
        }
    }
}

loadSurvey();
