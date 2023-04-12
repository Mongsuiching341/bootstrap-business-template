
$(document).ready(function () {
    $('.accordion-item').each(function (i, item) {
        $(item).mouseover(function (e) {

            $('.accordion-item').each(function (i, item) {
                $(item).removeClass('active')
            })

            $(item).addClass('active').css({ "background-color": "#040b10!important" })


        })
    })
})


// form validation


$(document).ready(function () {
    $('.contact-form').submit(function (e) {
        e.preventDefault();

        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#number').val();
        let message = $('#msg').val();



        if (name && email && phone && message) {
            $('.msg').text('Thanks for contacting us! We will get back to you soon.').css({ 'color': 'green' })
        } else {
            $('.msg').text('Input should not be empty').css({ 'color': 'crimson' })
        }

    })
})


// form validation end





var glideMulti = new Glide('.multi', {
    type: 'slider',
    // autoplay: 3500,
    bound: true,
    gap: 30,
    rewind: true,
    peek: {
        before: 120,
        after: 100
    },
    perView: 3,
    breakpoints: {
        1024: {
            perView: 2
        },
        600: {
            perView: 1
        }
    },
});

glideMulti.mount()

