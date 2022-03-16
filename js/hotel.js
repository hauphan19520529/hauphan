let hotel = [
    {
        name: 'VinOasis Phú Quốc',
        image1: './images/hotel/hotel-vinOasis-phu-quoc.jpg',
        image2: './images/hotel/gia-phong-vinpearl-oasis-phu-quoc-uu-dai.jpg',
        old_price: '5.138.574 đ',
        curr_price: '1.800.866 đ',
        discount: '30%'
    },
    {
        name: 'Azerai Ke Ga Bay',
        image1: './images/hotel/hotel-azerai-ke-ga.jpg',
        image2: './images/hotel/azerai-ke-ga-bay.jpg',
        old_price: '9.461.772 đ',
        curr_price: '8.204.764 đ',
        discount: '15%'
    },
    {
        name: 'Dalat Edensee Lake Resort & Spa',
        image1: './images/hotel/hotel-dalat-edensee-lake-resort.jpg',
        image2: './images/hotel/khu-nghi-duong-edensee-lake-resort--53-800x450.jpg',
        old_price: '2.525.390 đ',
        curr_price: '2.217.600 đ',
        discount: '5%'
    },
    {
        name: 'Sapa Jade Hill Resort',
        image1: './images/hotel/hotel-sapa-jade-hill-resort.jpg',
        image2: './images/hotel/e0ca8d290a242500e08638b897ea92ce.jpg',
        old_price: '3.045.000 đ',
        curr_price: '2.146.500 đ',
        discount:'30%'
    },
    {
        name: 'Hotel Vinpearl Discovery Sealink Nha Trang',
        image1: './images/hotel/hotel-vinpearl-discovery-sealink-nha-trang.jpg',
        image2: './images/hotel/Vinpearl-Discovery-Sealink-Nha-Trang-7_0.jpg',
        old_price: '5.251.189 đ',
        curr_price: '1.635.740 đ',
        discount: '65%'
    },
    {
        name: 'Khách sạn Indochine Palace',
        image1: './images/hotel/hotel-indochine-palace-hue.jpg',
        image2: './images/hotel/khach-san-indochine-palace-hue-15-800x450.png',
        old_price: '2.577.355 đ',
        curr_price: '2.219.468 đ',
        discount: '5%'
    },
]

let hotel_list = document.querySelector('#products')

renderProducts = (hotel) => {
    hotel.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./hotel-room.html" class="btn-flat btn-hover btn-shop-now">Xem ngay</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span class= "old-price"> ${e.old_price} </span>
                            <span class="curr-price">${e.curr_price}</span>
                            <span class="discount">(-${e.discount})</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        hotel_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(hotel)
renderProducts(hotel)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active'))

document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))