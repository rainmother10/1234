// Lấy các phần tử DOM cần thiết
const header = document.getElementById('header');
const changeButton = document.getElementById('changeButton');
const button1 = document.getElementById('button1');

// Thêm sự kiện click cho nút "có"
changeButton.addEventListener('click', function() {
    header.textContent = "Có, tôi yêu anh!";
});

// Thêm sự kiện click cho nút "không"
button1.addEventListener('click', function() {
    header.textContent = "vẫn là eo thôi không thoat được đâu";
});
