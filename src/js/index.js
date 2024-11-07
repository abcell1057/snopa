



/* Testimonial

// 請先讀完 DOM 文本後再執行各 function
document.addEventListener('DOMContentLoaded', function() {
    
    //carousel
    var swiper = new Swiper(".default-carousel", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
});
*/

/* FAQs */
$(document).ready(function () {
    // 預設打開第一個
    $('.accordion-item:first-child').addClass('active');
    $('.accordion-item:first-child .accordion-content').show(); // 確保第一個內容展開

    // 點擊 accordion-title 觸發顯示/隱藏
    $('.accordion-title').click(function () {
        const accordionItem = $(this).closest('.accordion-item');
        const accordionContent = accordionItem.find('.accordion-content');

        // 如果當前的 item 已經是打開狀態，則隱藏內容並移除 active
        if (accordionItem.hasClass('active')) {
            accordionContent.slideUp();
            accordionItem.removeClass('active');
        } else {
            // 只展開當前項目，其他已展開項目保持展開
            accordionContent.slideDown(); 
            accordionItem.addClass('active');
        }
    });
});
