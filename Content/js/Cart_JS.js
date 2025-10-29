// Lắng nghe sự kiện click vào tất cả các nút có class 'buy-btn'
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Lấy thông tin sản phẩm từ trang hiện tại
        const product = {
            name: document.querySelector('.product-info h1').innerText,
            price: document.querySelector('.price').innerText,
            image: document.querySelector('.product-image img').src,
        };

        // Lấy giỏ hàng từ localStorage (nếu có)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Kiểm tra xem sản phẩm đã có trong giỏ chưa
        const existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {
            alert('Sản phẩm đã có trong giỏ hàng!');
        } else {
            // Thêm sản phẩm mới
            cart.push(product);
            alert('Đã thêm sản phẩm vào giỏ hàng!');
        }

        // Lưu lại vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});
