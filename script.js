// Example script to enhance user experience
document.querySelectorAll('.tab input').forEach(input => {
    input.addEventListener('change', () => {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.querySelector('.tab input:checked + label + .tab-content').style.display = 'block';
    });
});
