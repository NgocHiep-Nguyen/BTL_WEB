
    // Lấy các phần tử Google và Apple
    const googleLogin = document.getElementById('googlelogin');
    const appleLogin = document.getElementById('applelogin');

    // Sự kiện click cho Google
    googleLogin.addEventListener('click', function() {
        window.location.href = googleLogin.getAttribute('data-url');
    });

    // Sự kiện click cho Apple
    appleLogin.addEventListener('click', function() {
        window.location.href = appleLogin.getAttribute('data-url');
    });
