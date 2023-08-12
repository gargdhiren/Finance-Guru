//This is react code for about page

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="about-page">
      <h1>Finance Guru</h1>
      <p>Welcome to Finance Guru, your go-to platform for mastering financial concepts through interactive quizzes with multilingual support!</p>
      
      <h2>Quiz and Scoring</h2>
      <p>Our quizzes cover a wide range of finance topics, from basic concepts to advanced strategies. After completing a quiz, your responses are evaluated to generate a score based on your answers. <Link to='/quiz'>Try the quiz now</Link></p>
      <h2>Calculator</h2>
      <p>A mutual Funds calculator is also provided in the app which calculates SIP and LUMPSUM on investment, number of years and rate of return so that you can make sound financial decisions. <Link to='/calculator'>Try the Calculator Now.</Link></p>
      <h2>Recommended Courses</h2>
      <p>Based on your quiz scores, we recommend courses tailored to your skill level:</p>
      <ul>
        <li>
          Beginner Level: If you're just starting, we recommend our <Link to="/beginnerCourse">Beginner Finance Course</Link>. This course covers foundational topics to build a strong financial knowledge base.
        </li>
        <li>
          Advanced Level: If you've shown a solid understanding in our quizzes, you might be interested in our <Link to="/advancedCourse">Advanced Finance Course</Link>. This course delves into more complex financial strategies.
        </li>
      </ul>
      
      <h2>Study Material</h2>
      <p>Each recommended course comes with a wealth of study material, including video lectures, readings, exercises, and more. Our goal is to provide you with a comprehensive learning experience that suits your needs.</p>
      
      <p className="start-journey">Start your finance journey with Finance Guru today!</p>
    </div>
  );
};

export default Home;