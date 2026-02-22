// بيانات تجريبية للمسارات التعليمية
const learningPaths = {
    primary: [
        {
            id: 1,
            title: "رحلة في مصر القديمة",
            image: "assets/images/ancient-egypt.jpg",
            grade: "الرابع الابتدائي",
            duration: "6 دروس",
            students: 1250,
            progress: 0,
            badge: "فرعوني"
        },
        {
            id: 2,
            title: "أعلام الدول العربية",
            image: "assets/images/arab-flags.jpg",
            grade: "الخامس الابتدائي",
            duration: "4 دروس",
            students: 980,
            progress: 0,
            badge: "جغرافيا"
        },
        {
            id: 3,
            title: "المواطنة وحقوقي",
            image: "assets/images/citizenship.jpg",
            grade: "السادس الابتدائي",
            duration: "5 دروس",
            students: 1100,
            progress: 0,
            badge: "مواطنة"
        }
    ],
    middle: [
        {
            id: 4,
            title: "الحضارة الإسلامية",
            image: "assets/images/islamic-civilization.jpg",
            grade: "الأول الإعدادي",
            duration: "8 دروس",
            students: 890,
            progress: 0,
            badge: "تاريخ"
        },
        {
            id: 5,
            title: "المناخ والنبات الطبيعي",
            image: "assets/images/climate.jpg",
            grade: "الثاني الإعدادي",
            duration: "6 دروس",
            students: 760,
            progress: 0,
            badge: "جغرافيا"
        }
    ],
    secondary: [
        {
            id: 6,
            title: "مصر في العصر الحديث",
            image: "assets/images/modern-egypt.jpg",
            grade: "الأول الثانوي",
            duration: "10 دروس",
            students: 540,
            progress: 0,
            badge: "تاريخ"
        }
    ]
};

// عرض المسارات حسب التصفية
function filterPaths(level) {
    const container = document.getElementById('paths-container');
    const paths = learningPaths[level] || learningPaths.primary;
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // عرض المسارات
    container.innerHTML = paths.map(path => `
        <div class="path-card" onclick="startPath(${path.id})">
            <div class="path-image" style="background-image: url('${path.image}')">
                <span class="path-badge">${path.badge}</span>
            </div>
            <div class="path-content">
                <h3 class="path-title">${path.title}</h3>
                <div class="path-meta">
                    <span><i class="fas fa-graduation-cap"></i> ${path.grade}</span>
                    <span><i class="fas fa-video"></i> ${path.duration}</span>
                    <span><i class="fas fa-users"></i> ${path.students}</span>
                </div>
                <div class="path-progress">
                    <div class="progress-bar" style="width: ${path.progress}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}

// بدء رحلة معرفية
function startPath(pathId) {
    // التحقق من تسجيل الدخول
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        window.location.href = `video-player.html?path=${pathId}`;
    } else {
        window.location.href = 'login.html?redirect=video-player.html';
    }
}

// عرض النسخة التجريبية
function showDemo() {
    // إنشاء نافذة منبثقة لعرض الفيديو التعريفي
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>شاهد كيف تعمل بصيرة</h2>
            <div class="video-container">
                <video controls poster="assets/images/demo-thumbnail.jpg">
                    <source src="assets/videos/demo.mp4" type="video/mp4">
                    متصفحك لا يدعم تشغيل الفيديو
                </video>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // إضافة التنسيقات للنافذة المنبثقة
    const style = document.createElement('style');
    style.textContent = `
        .demo-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }
        .modal-content {
            background: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 800px;
            width: 90%;
            position: relative;
        }
        .close-btn {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
            color: #666;
        }
        .close-btn:hover {
            color: #333;
        }
        .video-container {
            margin-top: 20px;
        }
        video {
            width: 100%;
            border-radius: 10px;
        }
    `;
    document.head.appendChild(style);
}

// الخريطة التفاعلية
document.addEventListener('DOMContentLoaded', function() {
    // عرض المسارات الابتدائية افتراضياً
    filterPaths('primary');
    
    // إضافة تفاعل الخريطة
    const continents = document.querySelectorAll('.continent');
    const mapInfo = document.getElementById('map-info');
    
    continents.forEach(continent => {
        continent.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            showContinentInfo(name);
        });
        
        continent.addEventListener('mouseover', function() {
            this.style.opacity = '1';
        });
        
        continent.addEventListener('mouseout', function() {
            this.style.opacity = '0.7';
        });
    });
});

// عرض معلومات القارة
function showContinentInfo(continentName) {
    const mapInfo = document.getElementById('map-info');
    
    const continentsData = {
        'أفريقيا': {
            countries: 54,
            population: '1.3 مليار',
            history: 'مهد الحضارة الإنسانية',
            landmarks: 'الأهرامات - تمثال الحرية'
        },
        'آسيا': {
            countries: 48,
            population: '4.6 مليار',
            history: 'حضارات الصين والهند القديمة',
            landmarks: 'سور الصين العظيم - تاج محل'
        },
        'أوروبا': {
            countries: 44,
            population: '750 مليون',
            history: 'الحضارة اليونانية والرومانية',
            landmarks: 'برج إيفل - الكولوسيوم'
        },
        'أمريكا': {
            countries: 35,
            population: '1 مليار',
            history: 'حضارات المايا والإنكا',
            landmarks: 'تمثال الحرية - ماتشو بيتشو'
        }
    };
    
    const data = continentsData[continentName];
    
    mapInfo.innerHTML = `
        <h3>${continentName}</h3>
        <ul class="continent-details">
            <li><span class="detail-label">عدد الدول:</span> <span class="detail-value">${data.countries}</span></li>
            <li><span class="detail-label">عدد السكان:</span> <span class="detail-value">${data.population}</span></li>
            <li><span class="detail-label">لمحة تاريخية:</span> <span class="detail-value">${data.history}</span></li>
            <li><span class="detail-label">أشهر المعالم:</span> <span class="detail-value">${data.landmarks}</span></li>
        </ul>
        <button class="btn btn-primary" style="margin-top: 20px; width: 100%;" onclick="startContinentJourney('${continentName}')">
            ابدأ رحلة استكشاف ${continentName}
        </button>
    `;
}

// بدء رحلة قارة
function startContinentJourney(continent) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        alert(`سيتم توجيهك إلى رحلة استكشاف ${continent}`);
    } else {
        window.location.href = 'login.html';
    }
}

// التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
