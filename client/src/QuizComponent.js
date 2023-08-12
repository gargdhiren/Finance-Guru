import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizComponent.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const QuizComponent = ({ language }) => {
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    // Fetch quiz data from the API
    axios.get(`http://localhost:3001/quiz${language}`)
      .then(response => {
        console.log(response.data);
        setQuizData(response.data);
      })
      .catch(error => {
        console.error('Error fetching quiz data:', error);
      });
  }, [language]);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = optionIndex;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    if (userAnswers.length === quizData.length) {
      console.log('submit clicked');
      // Ensure that all questions have been answered before submitting
      axios.post('http://localhost:3001/submitAnswers', { answers: userAnswers })
        .then(response => {
          console.log('Answers submitted successfully:', userAnswers);
          const submittedScore = response.data.score;
          console.log(submittedScore);
          setQuizScore(submittedScore);
          setQuizSubmitted(true);
        })
        .catch(error => {
          console.error('Error submitting answers:', error);
        });
    } else {
      console.log('Please answer all questions before submitting.');
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-heading">Quiz</h1>
      {quizSubmitted === false ? (
        <>
          {quizData.map((question, index) => (
            <div key={question._id} className="quiz-card">
              <p className="question-text">{question.question_no}</p>
              <p className="question-text">{question.question}</p>
              <form>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="option-card">
                    <label className="option-label">
                      <input
                        type="radio"
                        name={`question_${index}`}
                        value={optionIndex}
                        checked={userAnswers[index] === optionIndex}
                        onChange={() => handleOptionChange(index, optionIndex)}
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </form>
            </div>
          ))}
          <button className="submit-button" onClick={handleSubmit}>Submit Answers</button>
        </>
      ) : (
        <div className="quiz-score">
          <p>Your Quiz Score is: {quizScore}</p>
          <p>Thank you for taking the quiz!</p>
          <p>According to our score we recommend you</p>
          {
            quizScore < 7 ? (
              <Link to='/beginnerCourse'>Beginner Course</Link>
            ) : (
              <Link to='/advancedCourse'>Advanced Course</Link>
            )
          }
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
