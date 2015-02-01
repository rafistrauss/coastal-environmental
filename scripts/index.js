var errorCount = 0;



$(document).ready(function () {
    $('#submit').click(function () {
        submitForm();
    })
});


function submitForm() {
    loading();
    errorCount = 0;
    $('.inputs').attr('isInvalid', false);
    
    var name = $('#nameInput').val(),
        email = $('#emailInput').val(),
        phone = $('#phoneInput').val();
    var height = $('#contactForm').height();


    
    if (validateInputs(name, email, phone)) {


//        $.post('contact.php', {
          $.post('https://fittedthreads.com/admin/coastal.php', {
        
            name: name,
            email: email,
            phone: phone
        }, function (data) {
            console.log(data);
            setTimeout(function () {
                endload();
                $('#contactForm').hide();
                $('#contactResponse').height(height).show();

            }, 4500);
        });

    } else {


        endload();


    }
}

function validateInputs(name, email, phone) {

    validateName(name);
    validateEmail(email);
    validatePhone(phone);

    if (errorCount === 0) {
        return true
    }
    return false;
}

function validateName(name) {
    if ($.trim(name) !== '') {
        return true;
    }

    errorCount++;
    $('#nameInput').parent().attr('isInvalid', true);
    return false;
}

function validateEmail(email) {
    if (email.match(/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/)) {
        return true;
    }
    $('#emailInput').parent().attr('isInvalid', true);
    errorCount++;
    return false;
}

function validatePhone(phone) {
    if (phone.match(/^\d{10}$/)) {
        return true;
    }
    $('#phoneInput').parent().attr('isInvalid', true);
    errorCount++;
    return false;
}


function loading() {
    $('#loading').show().attr('src', 'images/loading_trans.gif');
}

function endload() {
    $('#loading').attr('src', '');
}

function changeHeader(color) {
    color = '#' + color;

    $('#logo').css({
        background: "linear-gradient(" + color + ", #FFF)"
    });
}

function changeHeaderSolid(color) {
    color = '#' + color;

    $('#logo').css({
        background: color
    });
}




function showSection(id) {

    id = '#' + id;


    if ($(id).is(":visible")) {

    } else {
        //		$('.section.selected').removeClass('selected');
        //        $('.slideshow div').removeClass('selected');

        var button = id.id + 'Button';

        $('.slideshow > div').fadeOut(500);
        $(id).delay(500).fadeIn(500);
        goToByScroll('slideshow');
        // addSelected(button);

    }

}

function goToByScroll(id) {

    //    alert(id);
    //console.log(id);
    var el = '#' + id;
    console.log(el);
    $(el).ScrollTo({
        duration: 1000,
        easeing: 'easeIn'

    });

    // Scroll
    //    $('html,body').animate({
    //        scrollTop: $("#"+id).offset().top},
    //        'slow');
}