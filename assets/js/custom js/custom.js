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

// side menu dropdown
const dropdownMenus = document.querySelectorAll('.drop_down');
const subMenuOpens = document.querySelectorAll('.sub-menu-sub_open');

// Function to close all child menus
function closeChildMenus(element) {
    const childSubMenus = element.querySelectorAll('.dropdown-sub-menu.active, .sub-menu-sub_open.active');
    childSubMenus.forEach(submenu => submenu.classList.remove('active'));
}

// Handle main dropdown menus
dropdownMenus.forEach((dropdownMenu) => {
    dropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Remove active class from all other dropdowns and their children
        dropdownMenus.forEach((otherDropdown) => {
            if (otherDropdown !== dropdownMenu) {
                otherDropdown.classList.remove('active');
                const otherSubMenu = otherDropdown.querySelector('.dropdown-sub-menu');
                if (otherSubMenu) {
                    otherSubMenu.classList.remove('active');
                    closeChildMenus(otherDropdown); // Close all child menus
                }
            }
        });

        // Toggle current dropdown
        const dropdownSubMenu = dropdownMenu.querySelector('.dropdown-sub-menu');
        if (dropdownSubMenu) {
            dropdownSubMenu.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
            
            // If parent becomes inactive, close all child menus
            if (!dropdownMenu.classList.contains('active')) {
                closeChildMenus(dropdownMenu);
            }
        }
    });
});

// Handle sub-menu-sub_open clicks
subMenuOpens.forEach((subMenuOpen) => {
    subMenuOpen.addEventListener('click', (e) => {
        e.stopPropagation();

        // Check if parent dropdown is active
        const parentDropdown = subMenuOpen.closest('.drop_down');
        if (!parentDropdown || !parentDropdown.classList.contains('active')) {
            return; // Don't open if parent is inactive
        }

        // Remove active class from other sub-menu-sub_open items at the same level
        const siblings = subMenuOpen.parentElement.querySelectorAll('.sub-menu-sub_open');
        siblings.forEach((sibling) => {
            if (sibling !== subMenuOpen) {
                const siblingSubMenu = sibling.querySelector('.dropdown-sub-menu.sub-menu');
                if (siblingSubMenu) {
                    siblingSubMenu.classList.remove('active');
                    sibling.classList.remove('active');
                }
            }
        });

        // Toggle current sub-menu
        const subMenu = subMenuOpen.querySelector('.dropdown-sub-menu.sub-menu');
        if (subMenu) {
            subMenu.classList.toggle('active');
            subMenuOpen.classList.toggle('active');
        }
    });
});

// Close all dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.drop_down') && !e.target.closest('.sub-menu-sub_open')) {
        const allDropdowns = document.querySelectorAll('.dropdown-sub-menu.active, .drop_down.active, .sub-menu-sub_open.active');
        allDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});