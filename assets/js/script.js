window.addEventListener('scroll', function(e) {
    if (window.scrollY > 10) {
        this.document.getElementById('navbar').classList.add('floatingNav');
    } else {
        this.document.getElementById('navbar').classList.remove('floatingNav');
    }
});