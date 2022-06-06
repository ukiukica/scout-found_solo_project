# SCOUT FOUND
Scout Found is a web application for browsing and sharing places with a photographic quality that can be used as locations for shooting films. It was inspired by Flickr, and fueled by the need to have an all-inclusive platform that will serve as a location scout book during film preproduction.

Find your next film set here: https://scout-found.herokuapp.com/

## Technologies Used
- PostgreSQL
- Sequelize
- Heroku
- GitHub
- Express
- React
- Redux

## Images

![alt text](https://github.com/ukiukica/scout-found_solo_project/blob/main/frontend/public/ScoutFound_Screenshot-1.jpg)

## MVP Features
1. Splash Page
<br>
If not logged in, a user is presented with a choice to register/sign in or simply start browsing.
Once the user clicks the "Browse" button or signs in, a list of all available film locations is rendered.

2. Film Locations
<br>
Fetched from the database along with related reviews.
A registered user can upload new film locations onto the website.
Each film location consists of:
- Title
- Description
- Images
- Address

3. Reviews
<br>
Fetched from the database for each related film location. Registered users can create, update and delete their own reviews.

## Challenges
Scout Found is a first solo project for the developer utilizing React with Redux for the front end. Being a brand new technology, it took familiarizing with the work environment of the Redux library in order to accomplish the features planned for the app. Due to the time constraint, only baseline features are currently present. However, the developer has a list of upgrades he wants to implement in the near future. A search feature, personalized profile page that keeps track of liked and posted film locations, and location address mapping, to name a few.
