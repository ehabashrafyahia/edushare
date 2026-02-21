// تفعيل مكتبة AOS للحركات
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// تأثير الشريط العلوي عند التمرير
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-glass');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// العدادات التصاعدية
$('.counter').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).data('target')
    }, {
        duration: 3000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// إضافة كلاس نشط للروابط حسب الصفحة الحالية
const currentLocation = location.pathname;
const menuItems = document.querySelectorAll('.nav-link');
menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation.split('/').pop()) {
        item.classList.add('active');
    }
});

// تأثير hover على الكروت
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// التحقق من صحة النموذج
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // هنا يمكن إضافة كود الإرسال الفعلي
        alert('تم الإرسال بنجاح!');
    });
});

// تأثير الكتابة في الهيدر
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    // typeWriter(); // ممكن تفعليها لو عاوزة تأثير الكتابة
}
