document.addEventListener("DOMContentLoaded", () => {
    // 1. Fungsi untuk efek Reveal on Scroll (Konten muncul saat discroll)
    const revealElements = document.querySelectorAll('.reveal');

    // Intersection Observer: API modern untuk mendeteksi visibilitas elemen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Elemen masuk viewport, tambahkan class 'active'
                entry.target.classList.add('active');
                // Hentikan pengawasan setelah aktif (opsional)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Berapa persen elemen harus terlihat sebelum aktif (10%)
        rootMargin: '0px 0px -50px 0px' // Margin untuk memicu lebih awal
    });

    // Terapkan observer ke semua elemen dengan class 'reveal'
    revealElements.forEach((element, index) => {
        // Berikan variabel --i untuk delay berurutan pada CSS
        element.style.setProperty('--i', index);
        observer.observe(element);
    });
});