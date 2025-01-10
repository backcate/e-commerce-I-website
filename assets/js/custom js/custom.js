// slide dropdown
const dropdown = document.querySelector('.header-menu-icon');
const dropdown2 = document.querySelector('.navbar_drawer');

dropdown.addEventListener('click', () => {
    dropdown2.classList.toggle('slide-down');
    if (dropdown2.value = 'slide-down') {
        IcoDrop.style.display = 'none';
        IcoUp.style.display = 'flex';
    }
});

//menu icon animation
const menuBtn = document.querySelector('.menu');

function openNav() {
    menuBtn.classList.toggle('opened');
    menuBtn.setAttribute('aria-expanded', 
    menuBtn.classList.contains('opened'));

    // add onclick
    const backdrop = document.querySelector(".offcanvas-backdrop");
    backdrop.setAttribute("onclick", "closeNav()");
}
function closeNav() {
    menuBtn.classList.remove('opened');
    menuBtn.setAttribute('aria-expanded', 'false');

    // add onclick
    const backdrop = document.querySelector(".offcanvas-backdrop");
    backdrop.removeAttribute("onclick");
}

// arrow show hide
$('.logic-show').on('click', function(){
    $('.logic-hide').css('display', 'block');
    $('.logic-show').css('display', 'none');
    // border
    $('.navbar_drawer').css('border-top', '1px solid #1d1d1d');
    $('.blur_layer').css('border-bottom', 'none');
});
$('.logic-hide').on('click', function(){
    $('.logic-show').css('display', 'block');
    $('.logic-hide').css('display', 'none');
    // border
    $('.navbar_drawer').css('border-top', 'none');
    $('.blur_layer').css('border-bottom', '1px solid #1d1d1d');
});

// dropdown
function toggleDropdown(event) {
    event.stopPropagation();
    
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu !== event.target.closest('.dropdown-container').querySelector('.dropdown-menu')) {
        menu.classList.remove('show');
    }
});
const dropdownMenu = event.target.closest('.dropdown-container').querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-container')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});