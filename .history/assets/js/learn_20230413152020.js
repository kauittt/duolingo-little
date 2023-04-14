async function getData() {
    try {
        console.log("1");
        const res = await fetch("./data.json");
        const data = await res.json();
        // console.log(data);
        // console.log(object);
        console.log(data);
        console.log("data");
    } catch (error) {
        console.log(error);
    }
}

getData();
console.log("learn");

var xhr = new XMLHttpRequest();

// Thiết lập phương thức GET và đường dẫn đến file JSON
xhr.open("GET", "../data/data.json", true);

// Xử lý phản hồi từ server khi tải file JSON
xhr.onload = function () {
    // Kiểm tra xem mã trạng thái HTTP có phải là 200 (OK)
    if (xhr.status === 200) {
        // Chuyển đổi nội dung của file JSON thành một đối tượng JavaScript
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};

// Gửi yêu cầu tải file JSON
xhr.send();
