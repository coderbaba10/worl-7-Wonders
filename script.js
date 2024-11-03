const wonders = document.querySelectorAll('.wonder');

wonders.forEach(wonder => {
    wonder.addEventListener('click', () => {
        const info = wonder.querySelector('.info');
        if (info.style.display === 'block') {
            info.style.display = 'none';
        } else {
            // Barcha boshqa ma'lumotlarni yashirish
            wonders.forEach(w => w.querySelector('.info').style.display = 'none');
            info.style.display = 'block';
        }
    });
});