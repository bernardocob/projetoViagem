let tabs = document.querySelectorAll('.tabsToggle');
    contents = document.querySelectorAll('.tabsContent');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('isActive');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('isActive');
        });

        contents[index].classList.add('isActive');
        tabs[index].classList.add('isActive');
    })
})