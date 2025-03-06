
// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {  // 対象が存在するかチェック
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    })
});


