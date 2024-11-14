document.addEventListener('DOMContentLoaded', function () {
    const btnNavs = document.querySelectorAll('.btn-nav');
    
    btnNavs.forEach(btnNav => {
        const subMenu = btnNav.nextElementSibling; // Lấy menu con liền kề nút

        // Khi nhấp vào nút, chuyển đổi hiển thị menu con
        btnNav.addEventListener('click', function (e) {
            e.stopPropagation(); // Ngăn chặn sự kiện click lan truyền ra ngoài

            // Đóng tất cả các menu khác trước khi mở menu hiện tại
            closeAllMenus(subMenu);

            // Chuyển đổi trạng thái hiển thị của menu hiện tại
            subMenu.classList.toggle('show');
        });

        // Đóng menu nếu nhấp ra ngoài vùng menu
        document.addEventListener('click', function (event) {
            if (!btnNav.contains(event.target) && !subMenu.contains(event.target)) {
                subMenu.classList.remove('show'); // Ẩn menu nếu nhấp ra ngoài
            }
        });
    });

    // Hàm để đóng tất cả các menu trừ menu đang được mở
    function closeAllMenus(currentSubMenu) {
        const allSubMenus = document.querySelectorAll('.boxCate__subMenu');
        allSubMenus.forEach(subMenu => {
            if (subMenu !== currentSubMenu) {
                subMenu.classList.remove('show'); // Đóng các menu khác
            }
        });
    }
});
