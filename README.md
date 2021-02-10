# TripScrap---A Trip Planning Application

**Development Team**

**SCRUM Leader:** Michelle Gude
**Git Master:** Mohsin Ahmed
**Task Manager:** Britney Ruotolo

**The backend README**
This is where the backend of TripScrap's functionality lives. The entire backend is made of Express routes, incorporating CRUD functionality through using both a Mongoose Model and Schema to grab data from, and using the routes as logic for the frontend functionality.

**Deployment**
Currently in progress as we ran into issues with Heroku being down and errors alongisde that.

**The reasoning behind the Backend Functionality and Dev**
The backend was one of our biggest pain points. But after working through rebuilding our routes, problem-solving through breaking the code, it all came together. The primary part that our backend currently serves with it being the MVP as of right now, is it's functionality with using the TripScrap.js Model to inform the user's backend functionality through Express Routes. With this model, it only holds two objects. A "title" for the title of what the user would like to do/remember to do when planning their trip, and a "complete" for logic (however, due to time constraints, we limited the routes/fetch calls to manipulating simply the title within our TripScrap Schema).

**User Stories**
*As a user, I want to create my own TripScrap todo.
*As a user, I want to save my TripScrap todo list on my dashboard
*As a user, I want to explore things to do
*As a user, I want to see pictures of the places I'll be visiting

**User Stretch Goals**
*As user, I want to share my todo list with friends/family
*As a user, I want a feature implemented to help me decide where to eat
*As a user, I want a geolocation feature of where I am and nearby places I can visit
*As a user, I want to explore options of flights, hotels, and vacation homes
*As a user, I want to have a weather forecast feature
*As a user, I want to be able to book services (restaurants, hotels, tours, etc.)
\*As a user, I want to be able to have reviews and ratings of the places I want to visit
