const mongoose=require('mongoose');
const beginnerHindiSchema=new mongoose.Schema({
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
const beginnerHindi=mongoose.model("beginnerHindi",beginnerHindiSchema);
module.exports=beginnerHindi;