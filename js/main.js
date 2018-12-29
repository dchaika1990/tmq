$(document).ready(function(){
    coverImage();

    // Clipping states

    function clippingTags(html, findHtml, count) {
        $(html).each(function () {
            var good = $(this).find(findHtml);
            var arr = [].slice.call(good);
            arr.forEach(function (elem) {
                elem.classList.remove('hidden');
            });

            if (good.length > count) {
                for (var i = arr.length - 1; i >= count; i--) {
                    arr[i].classList.add('hidden');
                }
            }
        })
    }

    $('.show-btn').on('click', function () {
        var $this = $(this);
        if ($this.attr('data') == 1) {
            $this.attr('data', 2).removeClass('open');
            clippingTags($('.states-list ul'), 'li', 7);
            $this.html('Show more <i class="fa fa-chevron-right fa-rotate-90"></i>');
        } else {
            $this.attr('data', 1).addClass('open');
            $('.states-list li').removeClass('hidden');
            $this.html('Show less <i class="fa fa-chevron-right fa-rotate-270"></i>');
        }
    });

    clippingTags($('.states-list ul'), 'li', 7);

    var $window = $(window);

    // OWL
    if ($().owlCarousel) {
        $('.owl-carousel').each(function() {
            var $carousel = $(this);
            $carousel.find('> *').each(function (i) {
                $(this).attr('data-index', i);
            });
            var data = $carousel.data();

            var loop = data.loop ? data.loop : false,
                margin = (data.margin || data.margin === 0) ? data.margin : 30,
                nav = data.nav ? data.nav : false,
                navPrev = data.navPrev ? data.navPrev : '<i class="fa fa-chevron-left">',
                navNext = data.navNext ? data.navNext : '<i class="fa fa-chevron-right">',
                dots = data.dots ? data.dots : false,
                themeClass = data.themeclass ? data.themeclass : 'owl-theme',
                center = data.center ? data.center : false,
                items = data.items ? data.items : 4,
                autoplay = data.autoplay ? data.autoplay : false,
                responsiveXs = data.responsiveXs ? data.responsiveXs : 1,
                responsiveSm = data.responsiveSm ? data.responsiveSm : 2,
                responsiveMd = data.responsiveMd ? data.responsiveMd : 3,
                responsiveLg = data.responsiveLg ? data.responsiveLg : 4,
                draggable = (data.draggable === false) ? data.draggable : true,
                syncedClass = (data.syncedClass) ? data.syncedClass : false,
                filters = data.filters ? data.filters : false;

            if (filters) {
                $carousel.after($carousel.clone().addClass('owl-carousel-filter-cloned'));
                $(filters).on('click', 'a', function( e ) {
                    //processing filter link
                    e.preventDefault();
                    if ($(this).hasClass('selected')) {
                        return;
                    }
                    var filterValue = $( this ).attr('data-filter');
                    $(this).siblings().removeClass('selected active');
                    $(this).addClass('selected active');

                    //removing old items
                    for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
                        $carousel.trigger('remove.owl.carousel', [1]);
                    };


                    //adding new items
                    var $filteredItems = $($carousel.next().find(' > ' +filterValue).clone());
                    // console.log((' > ' +filterValue));
                    // console.log($filteredItems);
                    $filteredItems.each(function() {
                        $carousel.trigger('add.owl.carousel', $(this));
                        $(this).addClass('scaleAppear');
                    });

                    $carousel.trigger('refresh.owl.carousel');

                    //reinit prettyPhoto in filtered OWL carousel
                    if ($().prettyPhoto) {
                        $carousel.find("a[data-gal^='prettyPhoto']").prettyPhoto({
                            hook: 'data-gal',
                            theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
                        });
                    }
                });

            } //filters

            $carousel.owlCarousel({
                loop: loop,
                margin: margin,
                nav: nav,
                autoplay: autoplay,
                dots: dots,
                themeClass: themeClass,
                center: center,
                navText: [navPrev,navNext],
                mouseDrag: draggable,
                touchDrag: draggable,
                items: items,
                responsive: {
                    0:{
                        items: responsiveXs
                    },
                    767:{
                        items: responsiveSm
                    },
                    992:{
                        items: responsiveMd
                    },
                    1200:{
                        items: responsiveLg
                    }
                },
            })
                .addClass(themeClass);
            if(center) {
                $carousel.addClass('owl-center');
            }

            $window.on('resize', function() {
                $carousel.trigger('refresh.owl.carousel');
            });

            //topline two synced carousels
            if($carousel.hasClass('owl-news-slider-items') && syncedClass) {
                $carousel.on('changed.owl.carousel', function(e) {
                    var indexTo = loop ? e.item.index+1 : e.item.index;
                    $(syncedClass).trigger('to.owl.carousel', [indexTo]);
                })
            }


        });


    } //eof owl-carousel
    var $carouseSection = $('.carousel-section');
    $carouseSection.find('.title-text .fa-chevron-left').on('click', function () {
        $(this).closest('.carousel-section').find('.owl-carousel').trigger('prev.owl');
    });
    $carouseSection.find('.title-text .fa-chevron-right').on('click', function () {
        $(this).closest('.carousel-section').find('.owl-carousel').trigger('next.owl');
    });
    
    
    // Share btns
    
    $('.review-share').on('click', function () {
        $(this).find('span').toggleClass('active');
    })

    // Share btns

    $('.dropdown').on('click', function () {
        $(this).find('.dropdown-wrap').toggleClass('active');
    })
});

$(window).on('resize', function () {
    coverImage();
});

function coverImage() {
    $(".cover-image").each(function(){
        var $element = $(this);
        if ( $(window).width() > 767 ) {
            var $image = $element.find(".bg-sm");
        } else {
            var $image = $element.find(".bg-xx");
        }
        var imagePath = $image.attr("src");
        $element.css("background-image", "url(" + imagePath + ")");
    });
}