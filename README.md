# Movies-Data-Base-Using-Node-and-Mongoose

Before executing the below commands prerequisites Software to be installed are nodeJs and mongodb

After downloaded the source code execute the following commands and Note: Before you execute make sure mongoDB is up and running otherwise it will take some time to show output as Data base not connected

The below commands are to be executed in terminal or cmd in windows

Step 1: npm install

Step 2: npm start

Step 3: There is a file called app.js in that file Line numbers 17,19 and 21 only you need to change the parameters in the functions and if there is no parameters given in the function you can ignore that.

Thats it after executing above Step1 and Step 2 commands you can see the output in the console or terminal for your reference I also pasted the outputs below.

![image](https://user-images.githubusercontent.com/34480223/140012404-eec1a282-e8dd-4d8f-9189-2afd24016e87.png)


# How to Insert new Movie data in table for that open app.JS file

![image](https://user-images.githubusercontent.com/34480223/140012608-01fd2505-aa76-4053-99c8-234adaae9947.png)

In above Pic I have mentioned the numbers for each number the below is the explanation and you can also refer to the code file also as I have mentioned the comments there also.

1 - give name of the movie

2 - give hero name

3 - give heroine name

4 - give year released number

5 - give director name

7 - it is just a function which will give output of list of rows or records in the movie table

6 - give hero name 

Note: In app.js file from Line number 23 onwards I have written CRUD operations to get all movies, insert a movie and gets movies based on a hero name given.

# Data Base Connection in app.js

![image](https://user-images.githubusercontent.com/34480223/140013264-52551209-5468-48ad-af3b-e5e69aa04045.png)

# Created the table Schema in model/movies.js and exported in app.js to USE it to perform CRUD operations

![image](https://user-images.githubusercontent.com/34480223/140013388-4acdc56c-0c5e-4336-9a9e-1c0bcca03a31.png)

![image](https://user-images.githubusercontent.com/34480223/140013454-bfbae265-5aa4-4328-9aec-118250fafca8.png)

The below is for Inserting and getting record from table

![image](https://user-images.githubusercontent.com/34480223/140013521-3b2c0c09-a51d-40d7-be5f-edc83eda6ab5.png)

The below is for getting record for give hero name from table

![image](https://user-images.githubusercontent.com/34480223/140013584-a2c566a9-565e-4f7c-b409-766866400080.png)


# To see the Database and movies table created in mongodb or not we have to open mongodb shell

Step 1: show dbs;

![image](https://user-images.githubusercontent.com/34480223/140014387-fccf6254-f2f8-403c-bc91-3014dcac0102.png)

in above you can see that there is a database created name called moviesDB

Step 2: use moviesDB

the above command will shift to moviesDB or use it, so that we can see the tables in it.

![image](https://user-images.githubusercontent.com/34480223/140014478-df7b6fd1-9257-4a05-a9f8-bafda0a3b4b9.png)

so you can see there is a table called movies note: in mongodb we call tables as collections and rows as records.

Step 3: db.movies.find({})

This command is similar to sql select statement which will retrives all rows or records in the movies table

![image](https://user-images.githubusercontent.com/34480223/140014591-e02ff9c7-d165-43ea-9cd2-f07836b46846.png)
