function to_there() {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#toshow").offset().top //id of div to be scrolled
    }, 1000);
}

// $(".click_contact").click(function () { //id of the link which is being clicked
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $("#xyzcontact").offset().top //id of div to be scrolled
//     }, 1000);
// });