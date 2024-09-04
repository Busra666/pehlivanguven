$(function() {
  "use strict";

    const content = {
        en: {
            main_page: "Main Page",
            description: "This is a sample page.",
        },
        tr: {
            main_page: "Anasayfa",
            description: "Bu bir örnek sayfadır.",
        },
        // Diğer diller buraya eklenebilir...
    };

    const elementsToTranslate = $("[data-translate]"); // Tüm çeviri elementlerini bir kez seç

    // Dil seçimi yapıldığı zaman localStorage'a kaydet ve sayfayı güncelle
    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        updateContent(lang);
    }

    // Sayfa yüklendiğinde veya dil seçimi değiştiğinde içeriği güncelle
    function updateContent(lang) {
        // Tüm metinleri tek bir seferde hazırla
        let translations = content[lang];

        // Seçilen tüm elementlerde hızlı bir şekilde dön
        for (let i = 0; i < elementsToTranslate.length; i++) {
            let element = elementsToTranslate[i];
            let key = $(element).data("translate");  // jQuery kullanarak data-translate'i al
            if (translations[key]) {
                element.textContent = translations[key];  // Metin içeriğini direkt değiştir
            }
        }
    }

    // Sayfa yüklendiğinde dil tercihini kontrol et
    $(document).ready(function () {
        const savedLang = localStorage.getItem('language') || 'en'; // Varsayılan dil 'en'
        updateContent(savedLang);
    });

    // Dil seçimi butonlarına tıklanma olayı ekleyin
    $(".lang-select").on("click", function () {
        const selectedLang = $(this).data("lang");
        setLanguage(selectedLang);
    });

  // //------- Sticky Header -------//
  // $(".sticky-header").sticky();

  //------- video popup -------//
  $(".hero-banner__video, .video-play-button").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // //------- mailchimp --------//  
	// function mailChimp() {
	// 	$('#mc_embed_signup').find('form').ajaxChimp();
  // }
  // mailChimp();

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


  if ($('.blog-slider').length) {
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        navText : ["<div class='blog-slider__leftArrow'><img src='img/home/left-arrow.png'></div>","<div class='blog-slider__rightArrow'><img src='img/home/right-arrow.png'></div>"],
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    })
  }

  /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
        $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }

  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();
  
});


