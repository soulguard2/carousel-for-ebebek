# carousel-for-ebebek

# Mehmet Can Aydın

Bilgilendirme:

PDf te belirtilen stories kısmı olmadığı için kodumu, en üstün bir altında bulunan carousel den önce çalışması içi ayarladım.
Direk "Chrome Developer Tools console"da çalışacak şekilde ayarlıdır.
İstenilen tüm user storyleri karşılasada carousel kısmında sorun yaşadığım için tamamlanamamıştır.
Bunun sebebi sitede bulunan carousel kısmında swiper kullanılmasıydı.
Pixel perfect replikasını yaparken sitedeki css ve html kodlarından faydalandım ama karmaşık yapısı yüzünden carousel kısmını çalıştıramadım.
Bu yapamadığım kısmı teknik ekiple konuşmak isterim.

////////////////////////////////////////////////////////////////////////////////////////////////

// carousel kısmı dolayısıyla dosyada tüm productların gözüktüğü bir html var user storylerin testi için
// Burayada carousel e benzeyen ama sağ ve sol tuşlarının çalışmadığı bir versiyonu koyacağım.

   /* const buildHTML = () => {
        const products = JSON.parse(localStorage.getItem('products'));
        const html = `
            <div class="banner">
                <div class="container">
                    <div class="banner__titles ng-star-inserted">
                        <h2 class="title-primary">Beğenebileceğinizi düşündüklerimiz</h2>
                    </div>
                    <div ebvisibilityobserver class="banner__wrapper ins-preview-wrapper-10167 ng-star-inserted"> 
                        <owl-carousel-o class="product-list__best-products" _nghost-serverapp-c124="">                 
                            <div _ngcontent-serverapp-c124="" class="owl-carousel owl-theme owl-loaded owl-responsive owl-drag">
                              <div _ngcontent-serverapp-c124="" class="owl-stage-outer ng-star-inserted">
                                <owl-stage _ngcontent-serverapp-c124="" class="ng-tns-c125-0 ng-star-inserted">
                                  <div class="ng-tns-c125-0">
                                        <div class="owl-stage ng-tns-c125-0" style="width: 5325px; transform: translate3d(0px, 0px, 0px); transition: all;">
                                        ${products.map((product, index) => `
                                        <div class="owl-item ng-tns-c125-0 ng-trigger ng-trigger-autoHeight ng-star-inserted active" style="margin-right: 20px;">
                                                <div class="ins-web-smart-recommender-box-item ng-star-inserted">
                                                    <div event-collection="true" class="ins-product-box ins-element-link ins-add-to-cart-wrapper ins-sr-api" ins-product-id="BRU-BUA4000">                                                    <div event-collection="true" class="ins-product-box ins-element-link ins-add-to-cart-wrapper ins-sr-api" ins-product-id="BRU-BUA4000">
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
                                </div>
                            </div>
                        </owl-carousel-o>
                        <button aria-label="back" class="swiper-prev"></button>
                        <button aria-label="next" class="swiper-next"></button>
                    </div>
                </div>
            </div>
        `;

        
        const productCarousel = document.querySelector('body > eb-root > cx-storefront > main > cx-page-layout > cx-page-slot.Section2A.has-components > eb-product-carousel');
        // console.log(productCarousel);
        if (productCarousel) { // Replikasını yapmak istediğimiz yerin üst kısmına html ekleme
            productCarousel.insertAdjacentHTML('afterbegin', html);
        }
    } */