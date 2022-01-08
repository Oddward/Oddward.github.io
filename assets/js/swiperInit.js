const swiper = new Swiper('.workSwiper', {
    // loop: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    },
    effect: 'cards',
    centeredSlides: true,
    slidesPerView: 'auto'
})

const swiperContact = new Swiper('.swiperContact', {
    // loop: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'custom',

    // }, //broken/badly designed feature for custom pagination
    effect: 'slide',
    centeredSlides: true,
    slidesPerView: 1
})
let contactNav1 = document.querySelector( '#contact-form-tab' )
let contactNav2 = document.querySelector( '#contact-email-tab' )
let contactNav3 = document.querySelector( '#contact-app-tab' )
let contactNav4 = document.querySelector( '#contact-socials-tab' )

swiperContact.on( 'slideChange', () => {
    if (swiperContact.activeIndex == 0) {
        contactNav1.classList.add( 'swiper-active-tab' )
    } else contactNav1.classList.remove( 'swiper-active-tab' )
    
    if (swiperContact.activeIndex == 1) {
        contactNav2.classList.add( 'swiper-active-tab' )
    } else contactNav2.classList.remove( 'swiper-active-tab' )

    if (swiperContact.activeIndex == 2) {
        contactNav3.classList.add( 'swiper-active-tab' )
    } else contactNav3.classList.remove( 'swiper-active-tab' )

    if (swiperContact.activeIndex == 3) {
        contactNav4.classList.add( 'swiper-active-tab' )
    } else contactNav4.classList.remove( 'swiper-active-tab' )

})

const swiperAbout = new Swiper('.swiperAbout', {
    // loop: true,
    navigation: {
        nextEl: '.swipe-next',
        prevEl: '.swipe-prev'
    },
    effect: 'slide',
    centeredSlides: true,
    slidesPerView: 1
})