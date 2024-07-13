document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const originalColor = header.style.backgroundColor;

    header.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#2980b9';
    });

    header.addEventListener('mouseout', function() {
        header.style.backgroundColor = originalColor;
    });
});