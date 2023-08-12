const mongoose=require('mongoose');
const beginnerEnglishSchema=new mongoose.Schema({
  moduleNumber:{
      type: Number,
      required: true,
  },
  title:{
      type: String,
      required: true,
  },
  content:{
    type:String,
    required: true
  }
});
const beginnerEnglish=mongoose.model("beginnerEnglish",beginnerEnglishSchema);
module.exports=beginnerEnglish;