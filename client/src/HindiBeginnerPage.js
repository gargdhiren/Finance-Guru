import React, { useState, useEffect } from 'react';
import './HindiBeginnerPage.css'; // Import your CSS file

function HindiBeginnerPage({ language }) {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/beginner${language}`)
      .then(response => response.json())
      .then(data => setLessons(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [language]);

  const handleLessonClick = lesson => {
    setSelectedLesson(lesson);
  };

  return (
    <>
      <h1 className="course-heading">Advanced Course</h1>
      <div className="lessons-container">
        <div className="lesson-list">
          {lessons.map(lesson => (
            <div
              key={lesson._id}
              className={`lesson-item ${selectedLesson === lesson ? 'selected' : ''}`}
              onClick={() => handleLessonClick(lesson)}
            >
              Module {lesson.moduleNumber}: {lesson.title}
            </div>
          ))}
        </div>
        <div className="lesson-content">
  {selectedLesson && (
    <>
      <h2>Module {selectedLesson.moduleNumber}: {selectedLesson.title}</h2>
      <p>{selectedLesson.content}</p>
      <div className="video-container">
        <iframe
          title={`Module ${selectedLesson.moduleNumber}`}
          src="https://www.youtube.com/embed/watch?v=HbH-gxXKieI&list=PL7MuFnZAs4VTA97G9nYrxmSdSqyRr1BVA&index=8&ab_channel=TheFinancialLiteracyCourse"// Replace with the actual video URL
          frameBorder="0"
          allowFullScreen
          width="640px"
          height="320px"
        ></iframe>
      </div>
    </>
  )}
</div>

      </div>
    </>
  );
}

export default HindiBeginnerPage;
