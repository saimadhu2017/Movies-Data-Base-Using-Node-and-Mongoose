const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema({
    movie_name:{
        type:String,
        unique:true,
        required:true
    },
    lead_actor:{
        type:String
    },
    actress:{
        type:String
    },
    year_of_release:{
        type:Number
    },
    director_name:{
        type:String
    }
});

const movies=mongoose.model('movies',movieSchema);
module.exports=movies;