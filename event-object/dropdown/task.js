const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__link');

    value.addEventListener('click', function() {
        list.classList.toggle('dropdown__list_active');
    });

    items.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            value.textContent = link.textContent;
            list.classList.remove('dropdown__list_active');
        });
    });

    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            list.classList.remove('dropdown__list_active');
        }
    });
});