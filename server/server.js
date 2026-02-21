const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// قاعدة بيانات تجريبية للمنهج
const lessons = [
  { 
    id: 1, 
    title: "حضارة مصر القديمة", 
    type: "تاريخ", 
    content: "شرح مفصل عن الأسرات الفرعونية بأسلوب تفاعلي.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    id: 2, 
    title: "تضاريس الوطن العربي", 
    type: "جغرافيا", 
    content: "استكشف الجبال والهضاب في وطننا العربي.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  }
];

// مسار لجلب الدروس
app.get('/api/lessons', (req, res) => {
  res.json(lessons);
});

// تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
