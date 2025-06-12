(()=>{
    const init = () => {
        // Bulunduğu url kontrolü yapma
        const currentUrl = window.location.href;
    
        if (currentUrl === 'https://www.e-bebek.com/') {
            takeItems(); // En başta product kontrolü yapılıyor
            buildCSS(); // css kurulumu
        } else {
            console.log('Wrong page');
        }
    };

    
    const takeItems = () => {
        // LocalStorage kontrolü
        const checkProducts = localStorage.getItem('products');
        if (checkProducts) {
            const products = JSON.parse(checkProducts);
            console.log("Local Storage Products", products);
            buildHTML(products); // Veri varsa HTML oluşturma
        } else { //fetch ile veri alma
            fetch('https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json', {method: 'GET'})
                .then(response => response.json())
                .then(data => {
                    //favorileri kontrol etmek için ürünlerin içine favorite variable yerleştirdim
                    const dataWithFavorite = data.map(product => ({
                        ...product,
                        favorite: false
                    }));
                    localStorage.setItem('products', JSON.stringify(dataWithFavorite));
                    console.log("New Data", dataWithFavorite);
                    buildHTML(dataWithFavorite); // Veri alındıktan sonra HTML oluşturma
                })
                .catch(error => console.log(error));
        }
    };

    const buildHTML = (products) => {
        // const products = JSON.parse(localStorage.getItem('products'));
        // if (!products) {
        //     console.log("Product ile ilgili bir hata oluştu");
        //     return;
        // }
        const html = `
            <div class="banner">
                <div class="container">
                    <div class="banner__titles ng-star-inserted">
                        <h2 class="title-primary">Beğenebileceğinizi düşündüklerimiz</h2>
                    </div>
                    <div ebvisibilityobserver class="banner__wrapper ins-preview-wrapper-10167 ng-star-inserted"> 
                        <owl-carousel-o class="product-list__best-products" _nghost-serverapp-c124="">
                            <div class="product-list__best-products owl-carousel owl-theme owl-loaded owl-responsive owl-drag ng-tns-c125-0 ng-star-inserted owl-stage">
                                <owl-stage _ngcontent-serverapp-c124="" class="ng-tns-c125-3 ng-star-inserted">
                                    <div class="carousel">
                                        ${products.map((product, index) => `
                                        <div class="owl-item ng-tns-c125-0 ng-trigger ng-trigger-autoHeight ng-star-inserted active" style="margin-right: 20px;">
                                            <div class="ins-web-smart-recommender-box-item ng-star-inserted" style="">
                                                <div class="ins-web-smart-recommender-box-item ng-star-inserted" style="">
                                                    <div event-collection="true" class="ins-product-box ins-element-link ins-add-to-cart-wrapper ins-sr-api" ins-product-id="DOL-8091">
                                                        <eb-carousel-product-item>
                                                            <div class="product-item">
                                                                <div class="product-item-anchor" event-collection="true">
                                                                    <a class="product-item-anchor ng-star-inserted" href="${product.url}">
                                                                        <figure class="product-item__img without-ar ng-star-inserted">
                                                                        <img class="ng-star-inserted ls-is-cached lazyloaded" alt="${product.name}" data-src="${product.img}" src="${product.img}">
                                                                        </figure>
                                                                    </a>
                                                                    <div class="product-item-content ng-star-inserted">
                                                                        <a class="product-item-anchor ng-star-inserted" href="${product.url}">
                                                                            <h2 class="product-item__brand ng-star-inserted"><b> ${product.brand} - </b><span> ${product.name} </span></h2>
                                                                            <div class="d-flex mb-2 stars-wrapper align-items-center ng-star-inserted">
                                                                                <cx-star-rating disabled="true" style="--star-fill: 5;">
                                                                                    <cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon>
                                                                                    <cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon>
                                                                                    <cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon>
                                                                                    <cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon>
                                                                                    <cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon>
                                                                                </cx-star-rating>
                                                                            <p class="review-count ng-star-inserted">(0)</p></div>
                                                                        </a>
                                                                        <div class="product-item__price">
                                                                        ${product.price === product.original_price // indirim kontrolü
                                                                            ? `<div class="d-flex align-items-center ng-star-inserted"></div>
                                                                            <span class="product-item__new-price ng-star-inserted">${product.price} TL</span>` 
                                                                            : `
                                                                            <div class="d-flex align-items-center ng-star-inserted">
                                                                                <span class="product-item__old-price ng-star-inserted">${product.original_price} TL</span>
                                                                                <span class="product-item__percent carousel-product-price-percent ml-2 ng-star-inserted">${Math.round(((product.original_price - product.price)/product.original_price)*100)}% <i class="icon icon-decrease"></i></span>
                                                                            </div>
                                                                            <span class="product-item__new-price discount-product ng-star-inserted">${product.price} TL</span>
                                                                            `
                                                                        }
                                                                        </div>
                                                                    </div>
                                                                    <div class="heart" data-index="${index}">
                                                                        <img id="default-favorite-${product.id}" src="${product.favorite ? 'https://www.svgrepo.com/show/406819/orange-heart.svg' : 'assets/svg/default-favorite.svg'}" alt="heart" class="heart-icon">
                                                                    </div>
                                                                    <div class="product-item-content">
                                                                        <div class="product-item__price">
                                                                            <div class="ins-add-to-cart-wrapper" ins-product-id="DOL-8091"><eb-add-to-cart buttonclass="close-btn">
                                                                                <form novalidate="" class="ng-untouched ng-pristine ng-valid ng-star-inserted">
                                                                                    <button id="addToCartBtn" type="submit" class="btn close-btn disable ng-star-inserted">Sepete Ekle</button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </eb-carousel-product-item>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        `).join('')}
                                    </div>
                                </owl-stage>
                                <button aria-label="back" class="swiper-prev my-prev"></button>
                                <button aria-label="next" class="swiper-next my-next"></button>
                            </div>
                        </owl-carousel-o>
                    </div>
                </div>
            </div>
        `;

        
        const productCarousel = document.querySelector('body > eb-root > cx-storefront > main > cx-page-layout > cx-page-slot.Section2A.has-components > eb-product-carousel');
        // console.log(productCarousel);
        if (productCarousel) { // Replikasını yapmak istediğimiz yerin üst kısmına html ekleme
            productCarousel.insertAdjacentHTML('afterbegin', html);
        }
        setEvents(); // tüm HTML tamamlandıktan sonra addEventListenerları ekleme
    }

    const buildCSS = () => { // Az biraz Responsive
    const css = `     
        @media (max-width: 580px) {
            .owl-item {
                width: 245px;
            }
        }

        @media (min-width: 581px) and (max-width: 767px) {
            .owl-item {
                width: 245px;
            }
        }

        @media (min-width: 768px) and (max-width: 993px) {
            .owl-item {
                width: 335px;
            }
        }

        @media (min-width: 994px) and (max-width: 1280px) {
            .owl-item {
                width: 296.667px;
            }
        }

        @media (min-width: 1281px) {
            .owl-item {
                width: 272.5px;
            }
        }

        .heart-icon {
            transform: scale(0.8);
        }

        .carousel {
          transform-style: preserve-3d;
          box-sizing: border-box;
          overflow: hidden;
        }

    }  

    

    `; //.heart-icon siteden aldığım svg boyutunu küçültmek için kullandım
    // .carousel ve birkaç css koduyla carousel yapmaya çalıştım fakat sitedeki kod karmaşıklığı nedeniyle istediğim gibi olmadı.

        //     .owl-item {
        //     display: flex;
        //     overflow: hidden;
        //     position: relative;
        // }

        // .product-item {
        //     flex: 0 0 100%;
        //     transition: transform 0.5s ease-in-out;
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        // }

    // Örnek koddaki css append kodu çalışmadı, değiştirmek zorunda kaldım.
    const style = document.createElement('style');
    style.className = 'carousel-style';
    style.textContent = css;
    document.head.appendChild(style);
    };


    const setEvents = () => {//Jquery yerine DOM ve addEventListener ile yapmak daha iyi oldu
        const hearts = document.querySelectorAll('.heart');
        console.log(hearts);
        
        hearts.forEach((heartIcon) => {
            heartIcon.addEventListener('click', (event) => {
                // console.log('Event Listening...');
                const index = event.currentTarget.getAttribute('data-index');
                ChangeFavorite(index);
            });
        });
        // $('').on('click', () => {
        //     console.log('clicked');
        // });
    };

    const ChangeFavorite = (index) => {// Favori ekleme ve ya çıkarma
        const products = JSON.parse(localStorage.getItem('products'));
        const product = products[index];

        if (product.favorite) {
            product.favorite = false; 
        }else {
            product.favorite = true;
        }

        localStorage.setItem('products', JSON.stringify(products));
        
        //Favori ikonu değiştirme
        const heartElement = document.querySelector(`#default-favorite-${product.id}`);
        if (product.favorite) {
            heartElement.src = 'https://www.svgrepo.com/show/406819/orange-heart.svg'; //Websiteden aldığım turuncu kalp
        } else {
            heartElement.src = 'assets/svg/default-favorite.svg';
        }
    };

    init();
})(); 



