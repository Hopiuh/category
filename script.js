document.addEventListener("DOMContentLoaded", function() {
    const categorySections = document.querySelectorAll('.category-section');

    categorySections.forEach(function(section) {
        // section.addEventListener('mouseover', function() {
        //     const popup = this.querySelector('.popup');
        //     if (popup) {
        //         popup.style.display = 'block';
        //     }
        // });

        // section.addEventListener('mouseout', function() {
        //     const popup = this.querySelector('.popup');
        //     if (popup) {
        //         popup.style.display = 'none';
        //     }
        // });

        section.addEventListener('click', function() {
            const categoryName = this.id;
            redirectTo(categoryName + '.html');
        });
    });

    function redirectTo(page) {
        window.location.href = page;
    }
});