

// jQuery('select').addClass('form-control');
jQuery('.contextual-filters-section').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
                {
                        breakpoint: 720, // tablet breakpoint
                        settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                // arrows: true,
                        }
                },
                // {
                //         breakpoint: 576, // mobile breakpoint
                //         settings: {
                //                 slidesToShow: 2,
                //                 slidesToScroll: 2
                //         }
                // }
        ]
});

