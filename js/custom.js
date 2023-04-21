window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('header');
    if (window.pageYOffset > 0) {
        nav.classList.add('fixed-menu');
    } else {
        nav.classList.remove('fixed-menu');
    }
});
var loader = document.getElementById('preloader');
window.addEventListener('load', function() {
    loader.style.display = 'none';
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#scrolltop').css({
            'opacity' : '1',
        });
    } else {
        $('#scrolltop').css({
            'opacity' :'0',
        });
    }
})
$('#scrolltop').click(function() {
    $('html, body').scrollTop('slow');
})