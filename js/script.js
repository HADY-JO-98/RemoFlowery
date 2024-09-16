window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.getElementById('bup').style.display = "none";
});
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 120) {
        document.getElementById('bup').style.display = "flex";
    } else {
        document.getElementById('bup').style.display = "none";
    }
    console.log('scrolled');
});