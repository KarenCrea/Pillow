var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');
})

$(document).ready(function() {
        $('.wrapper-menu').on('click', function() {
            $('.overlay').toggleClass('open');
        });
    });

