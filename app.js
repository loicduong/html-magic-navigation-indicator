const lists = document.querySelectorAll('.list');

function activeLink() {
    lists.forEach((list) => {
        list.classList.remove('active');
    });
    this.classList.add('active');
}

lists.forEach((list, index) => {
    list.addEventListener('click', activeLink);
});