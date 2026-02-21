import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    // جلب البيانات من السيرفر (تأكد من تشغيل السيرفر أولاً)
    fetch('http://localhost:5000/api/lessons')
      .then(res => res.json())
      .then(data => setLessons(data))
      .catch(err => console.error("Error fetching lessons:", err));
  }, []);

  return (
    <div className="platform-container">
      <nav className="navbar">
        <h2>منصة الدراسات الاجتماعية الذكية 🌍</h2>
      </nav>

      <div className="main-content">
        <aside className="sidebar">
          <h3>قائمة الدروس</h3>
          {lessons.map(lesson => (
            <div 
              key={lesson.id} 
              className={`lesson-item ${selectedLesson?.id === lesson.id ? 'active' : ''}`}
              onClick={() => setSelectedLesson(lesson)}
            >
              {lesson.title} ({lesson.type})
            </div>
          ))}
        </aside>

        <section className="content-viewer">
          {selectedLesson ? (
            <div className="lesson-detail">
              <h1>{selectedLesson.title}</h1>
              <div className="video-container">
                 <iframe src={selectedLesson.video} title="Video Lesson" frameBorder="0" allowFullScreen></iframe>
              </div>
              <p className="lesson-text">{selectedLesson.content}</p>
              <button className="quiz-btn">ابدأ الاختبار الآن 📝</button>
            </div>
          ) : (
            <div className="welcome-msg">اختر درساً من القائمة لتبدأ رحلتك التاريخية!</div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
