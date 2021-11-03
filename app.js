//Importing mongoose library
const mongoose=require('mongoose');
//Importing movies schema so that we can use CRUD operations on it
const movies=require('./model/movies');

//Step 1 and Step 2 Data Base Connection and Data base creation
mongoose.connect('mongodb://localhost:27017/moviesDB', {
  useNewUrlParser: true
}).then(
    ()=>{console.log("Successfully Data Base Connected...");}
).catch(
    ()=>{console.log("Failed To Connect with Data Base Try Again...");}
);

//Call the required Function this is the line where we have to change code
//Step 3 -->inserting data in table if there is no table it will create table and insert data
insertMovie({movie_name:"Baahubali", lead_actor:"Prabhas", actress:"anushka shetty", year_of_release:2015 ,director_name:"S. S. Rajamouli"});
//Step 4 -->Get all movies that are inserted so far in the table
getAllMovies();
//Step 5 -->Get list of movies related to the actor name note: if "[]" is the output means there is movies related to the given actor
getLeadActorMovies("Prabhas");

//Below methods are the CRUD Operations
//--> Inserting data in movie table
async function insertMovie(data){
    try {
        await movies.create(data);
        console.log("Successfully Inserted Movie Data");
    } catch (error) {
        console.log("Not Inserted Data because of "+error.message);
    }
}

//--> getting all movie rows from table in JSON format
async function getAllMovies(){
    try {
        const result=await movies.find({},{_id:0,__v:0});
        console.log("List of Movies");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

//--> getting movies list based on lead_actor name
async function getLeadActorMovies(lead_actor){
    try {
        const result=await movies.find({lead_actor:lead_actor},{_id:0,__v:0});
        console.log(`List of ${lead_actor} related Movies`);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}