const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const beginnerHindi=require('./models/lessonhindi.js');
const beginnerEnglish = require('./models/lessonenglish.js');
const quizEnglish = require('./models/quiz.js');
const quizHindi = require('./models/quizHindi.js');
mongoose.connect('mongodb://127.0.0.1:27017/ashley')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/quizEnglish', async (req, res) => {
  quizEnglish.find({}, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get('/quizHindi', async (req, res) => {
  quizHindi.find({}, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get('/beginnerEnglish',async (req,res)=>{
  beginnerEnglish.find({},(err,result)=>{
    if(err){
      res.json(err);
      console.log(err);
    }
    else{
      res.json(result);
    }
  })
})
app.get('/beginnerHindi',async (req,res)=>{
  beginnerHindi.find({},(err,result)=>{
    if(err){
      res.json(err);
      console.log(err);
    }
    else{
      res.json(result);
    }
  })
})
app.get('/')
app.post('/submitAnswers', async (req, res) => {
  const userAnswers = req.body.answers;

  // Fetch the correct answers from the database
  const correctAnswers = await quizEnglish.find({}, 'correct_option').lean();

  // Compare user answers with correct answers and calculate the score
  let score = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i].correct_option == parseInt(userAnswers[i])+1) {
      score++;
    }
  }
  // Process and save answers and score to the database if needed
  // For example, you can create a new document in a collection
  // to store the user's answers and their score

  console.log('User Answers:', userAnswers);
  console.log('Score:', score);

  // Respond to the client with the score
  res.status(200).json({ message: 'Answers submitted successfully', score });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
