# TripScrap---A Trip Planning Application

**Development Team**

**SCRUM Leader:** Michelle Gude 
**Git Master:** Mohsin Ahmed 
**Task Manager:** Britney Ruotolo 

**What is TripScrap?**
Think of it as a place to organize your upcoming journey to a new destination. 
TripScrap is a full-stack web application used to manage and create user “TripScraps” or virtual trip itineraries. 
The app allows users to put their itineraries into an organized dashboard, where they will also be given suggested experiences to add to their list in the form of cards.

**About**
TripScrap was created using the MERN stack which is comprised of MongoDb, Mongoose, Express, REACT, and Node.js. The app was also stylized using HTML, CSS, and Bootstrap.  

**Deployment**
When trying to deploy our backend to Heroku we were faced with an NPM Err message. After troubleshooting and updating our "scripts: start" we were able to resolve part of the error and get the application deployed. Unfortunately, we were met with an additional error on the heroku web application via the browser.  

**User Experience**
The TripScrap dashboard is really the shining star of this application. It a space for the user to organize their trip before they go. The user can create their own TripScrap todo list item, and save it to their TripScrap todo list. If the user wants to get rid of their task, they can click on the delete button attached to their corresponding todo list item.  

**Obstacles**
Our team was met with many challenges when trying to save user data to the backend TripScrap API.
We were able to save data locally and display it through localhost:3001/todos. 

**Creating the App from the Ground Up**
This application has full CRUD functionality, allowing the user to Create, Read, 
Update and Delete their todos even after refreshing the application in the browser. 
Client side rendering was handled using REACT.js 
Routes were created inside the controllers directory within the backend API of our application using Express. The Schema for our routes were created using Mongoose. 
Client side functionality was produced via representational state(via Restful API).

**User Stories**
As a user, I want to create my own TripScrap todo. 
As a user, I want to save my TripScrap todo list on my dashboard
As a user, I want to explore things to do
As a user, I want to see pictures of the places I'll be visiting

**User Stretch Goals** 
As user, I want to share my todo list with friends/family
As a user, I want a feature implemented to help me decide where to eat
As a user, I want a geolocation feature of where I am and nearby places I can visit
As a user, I want to explore options of flights, hotels, and vacation homes
As a user, I want to have a weather forecast feature
As a user, I want to be able to book services (restaurants, hotels, tours, etc.)
As a user, I want to be able to have reviews and ratings of the places I want to visit

