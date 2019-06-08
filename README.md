# Service Reservation App  [![Build Status](https://travis-ci.com/lancebendo/home-services-client.svg?branch=master)](https://travis-ci.com/lancebendo/home-services-client)
* Developer: Lance Patrick Bendo
* Demo Link: https://home-services-client.herokuapp.com/

## Overview
This is a demo project for a reservation
web app. As of today, the functionalities of
this web app are: 
  * creating a new reservation
  * view the upcoming and past reservations
  * edit user profile
  * configure addresses
	
I don't have a backend for this web app yet so implemented 
a simple mock datasource that can be consumed in redux for 
the sake of making this demo work.

The initial purpose of this project is so to show 
my skills and knowledge on designing and developing
a web app with Javascript and at the same time learning
and practicing on working with ES6 version of JavaScript.
	
## Notable Libraries used
* React
* Redux
* Materialize
* Styled-components
* Eslint (Airbnb Style)
* Jest & Enzyme

## Notable Technologies used
* VS Code
* Github
* Heroku (including CI Pipeline with Github)

## Code Patterns
* Nir Kaufman's Redux Pattern
  * This is similar to the one-way message pattern
  and I chose this approach since it can relate 
  well to action-based programming. It also makes my actions
  more explicit to help me on debugging.
  click the ff. link for additional information: https://www.youtube.com/watch?v=5gl3cCB_26M&t=586s

* Feature-based Project Structure
  * This is an approach that I learned from working
  on big projects from my past professional experience.
  This is perfect for react on creating components.

## Additional Notes
  * I'm still working on this project and will update this
  from time to time. I'm also planning on starting a new project
  for the backend of this application and I will use NodeJS
  on it. I'm also planning on doing a Microservices approach
  for the backend. 
  
  * Working on this small project has been 
  a learning experience for me but I'm also planning on 
  making this app be deployed in production and be used by
  a real business.
