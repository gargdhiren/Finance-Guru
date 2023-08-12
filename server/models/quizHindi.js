const mongoose=require('mongoose');
const quizSchema=new mongoose.Schema({
  question_no:{
      type: String,
      required: true,
  },
  question:{
      type: String,
      required: true,
  },
  option:{
    type:[{type:String}],
    required: true
  },
  correct_option:{
    type:String,
    required:true
  }
});
const quizHindi=mongoose.model("quizHindi",quizSchema);
module.exports=quizHindi;