$(document).ready(function() {
    $('.slider-container').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,

                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // infinite: true,
                    dots: true,

                }
            },
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         dots: true,
            //     }
            // },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,

                }
            }
        ]
    });
}