// clock.js

// Hàm để cập nhật thời gian
function updateClock() {
    const clockElement = document.getElementById('clock');
    
    // Tạo một đối tượng Date mới
    const now = new Date();
    
    // Định dạng ngày tháng
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('vi-VN', options);

    // Cập nhật nội dung của phần tử
    clockElement.textContent = formattedDate;
}

// Cập nhật thời gian ngay khi tải trang
updateClock();

// Cập nhật thời gian mỗi phút
setInterval(updateClock, 60000);
