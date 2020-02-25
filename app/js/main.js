$(document).ready(function () {
    $('.dropdown').on('click', function () {
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $(this).find('.dropdown-list').fadeIn()
        } else {
            $(this).find('.dropdown-list').fadeOut()
        }

    })


    $('form').on('submit', function (e) {
        e.preventDefault()

        if ($('.not_error').length !== 5) {
            $('.form__submit').find('.form__btn').addClass('shake')
            setTimeout(function () {
                $('.form__submit').find('.form__btn').removeClass('shake')
            }, 1000);


            return false
        } else {
            $(this).parents('.content-right').find('.successfully').fadeIn()

        }


    })


    $('.dropdown-list li').on('click', function () {
        $(this).parents('.form__item-control').find('input.input-control').val($(this).text())
    })



    $('input#FirstName , input#LastName, input#Email, input#Password, input#ConfirmPassword').unbind().blur(function () {
        var id = $(this).attr('id');
        var val = $(this).val();


        switch (id) {
            case 'FirstName':
            case 'LastName':
                var rv_name = /^[a-zA-Z]+$/;

                if (val.length > 8 && val != '' && rv_name.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                    $(this).parents('.form__item').find('.check').fadeIn()

                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).parents('.form__item').find('.check').fadeOut()

                }
                break
            case 'Email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    $(this).addClass('not_error').removeClass('error');
                    $(this).parents('.form__item').find('.check').fadeIn()

                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).parents('.form__item').find('.check').fadeOut()

                }
                break;
            case 'Password':
            case 'ConfirmPassword':
                var rv_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
                if (val.length > 8 && rv_password.test(val)) {
                    $(this).addClass('not_error').removeClass('error');
                    $(this).parents('.form__item').find('.check').fadeIn()

                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).parents('.form__item').find('.check').fadeOut()

                }
                break;
        }

    })


});