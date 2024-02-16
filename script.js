// document.addEventListener('DOMContentLoaded', function () {
//     const mekanlar = document.querySelectorAll('.mekan');

//     function revealMekan(mekan) {
//         mekan.classList.add('visible');
//     }

//     function hideMekan(mekan) {
//         mekan.classList.remove('visible');
//     }

//     mekanlar.forEach(function (mekan) {
//         mekan.addEventListener('mouseover', function () {
//             revealMekan(mekan);
//         });

//         mekan.addEventListener('mouseout', function () {
//             hideMekan(mekan);
//         });
//     });
// }, false);


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');

    // Her bir navigasyon öğesi için tıklama olayı ekle
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Sayfanın scroll yapmasını engelle
            const targetId = link.getAttribute('href').substring(1);
            const targetMekan = document.getElementById(targetId);
            if (targetMekan) {
                targetMekan.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Her bir mekana tıklama olayı ekle
    const mekanLinks = document.querySelectorAll('.home > div');
    mekanLinks.forEach(mekanLink => {
        mekanLink.addEventListener('click', () => {
            const targetId = mekanLink.getAttribute('id');
            const targetNav = document.querySelector('.navbar a[href="#' + targetId + '"]');
            if (targetNav) {
                targetNav.click(); // Navbar'daki ilgili bağlantıya tıklama
            }
        });
    });
}, false);
