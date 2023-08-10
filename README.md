# MERN-Stack infrastructure
Clone this repo to provide the starter code for a future MERN-stack project 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Description
For our 4th and final project with General Assembly, I had the idea of keeping recipes in a neat, manageable format in one place with the ability to share and save other user’s recipes. Whilst 
this isn’t a very uncommon app my idea was that the user can then make a meal plan for the week, selecting recipes they’ve created or saved so that when they meal plan it can tell you the ingredients 
needed for the week.

Deployment link
Web url = https://cheft-deploy-028013bc2913.herokuapp.com/

Timeframe & Working Team (Solo/Pair/Group)
This was a solo project in which we had about 8 days to plan and build our app. 

Technologies Used
I used Figma for the planning stage as well as Trello to help visualise and document each step of the build process. 

The app itself was built in VScode using a MERN stack, MongoDB, Express, React, Node. 

Brief
We were briefed to create a working full-stack, single-page application hosted on Heroku. This was to be built using the technologies of a MERN-stack, using JWT for login authentication. Full CRUD was 
not required for this project if we were to consume data from a third-party API, dynamic UI / data visualisation or extra functionality if the user is an admin. My project centres mainly around CRUD 
operations so this was what I aimed for. 

Planning
I used the first couple of days planning how I wanted the app to look and feel. As well as where each component would sit. I initially then planned for the next few days to get all the routing and components 
set up so everything sends the user exactly where it should. After this I wanted to test the database and handle input functionality to ensure each meal was being saved to the database, whilst going through 
each of these steps styling it as I went to ensure it was consistent across each page.

Below you can see the trello board used, at the current point of what I was working on when the timeframe was up, and what I’m going to pick up in the future. 

![Cheft trello](https://github.com/KyleBarter/cheft/assets/118014478/a9ead6ac-3a13-4a91-b736-ccb05ba2590d)


Here is my ERD, which includes the review and meal plan functionality which I haven’t yet got working. The toughest part was trying to define which relationships would be a one to one and one to many as the 
definition of this can still be confusing to me. 

![Cheft ERD](https://github.com/KyleBarter/cheft/assets/118014478/36ef8a1e-c0cf-4a00-9577-05fe85793dec)

The first two pages here show the login and home screen. The home screen would be the main feed for users to view all recipes being shared. 

![Cheft WF 1](https://github.com/KyleBarter/cheft/assets/118014478/83bc3700-270b-486a-8e04-0d0375cfa805)


I wanted the ‘my recipes’ page for the user’s recipes to look more like a catalogue than them browsing through posts, like the home page. 

![Cheft WF 2](https://github.com/KyleBarter/cheft/assets/118014478/ca63e324-3c0c-4923-8993-47276fa91499)


The recipe ID page would hold the key recipe info, the comments and reviews. As well as how many saves, rating out of 5.

![Cheft WF 3](https://github.com/KyleBarter/cheft/assets/118014478/15eba7e6-1def-4212-96e5-ad3357cd3eb9)


Build/Code Process
An challengeI could see myself encountering further down the build process was that of the meal plan and showing the ingredients. If the user just lists it all in a text box, I could foresee issues with 
separating and grouping ingredients together, as ingredients will use different measurements ie 2 tablespoons of olive oil compared to 2 garlic cloves. I knew I’d need to implement a way of differentiating 
these. To pre-emptively fix this I added a button to ‘add ingredient’ so each ingredient is added as individual items to an array, so I can easily  use map() method later to iterate through the ingredients 
array. I’m also planning on adding a quantity and measurement field for each ingredient to add, so that they can be displayed correctly when I complete the meal prep page.
![Cheft code 1](https://github.com/KyleBarter/cheft/assets/118014478/83fab050-20df-41db-9f79-57ad91d856c6)


The two screenshots below show my users service and send request functions for JWT authentication. Using GetToken to fetch the auth token from the localStorage, and then decodes the hashed token to obtain the 
payload, which is then checked to see if it has expired. 
![Cheft code 2](https://github.com/KyleBarter/cheft/assets/118014478/9bb9d17f-b0a3-4343-8e0d-9283ae2a991f)
![Cheft code 3](https://github.com/KyleBarter/cheft/assets/118014478/5ab92261-317b-4df8-8461-4684703302bb)


With this I have created a standard MERN template so that I won’t need to rewrite any of this code unless necessary. I can then clone this template for any future MERN-stack apps I choose to build.



Challenges
One of the biggest challenges I found was getting to grips with how the React front-end interacts with the Express back-end. I think this is partially due to being only familiar with using EJS in project 2, where 
you would simply render a HTML file in the views functions. This caused lots of issues but forced me to become familiar with postman. 

It was mainly the create functionality I struggled with, due to the above reasons I was trying to create with the front-end, but nothing was logging with the database so this caused a lot of confusion and delays. 
After it was explained further this was quickly resolved and update and delete were created with ease.


Wins
Really enjoyed working with the react components and hooks such as useState and useEffect. I felt like it was much more seamless to work with and I’m looking to rebuild my 24 hours project in React as I feel that 
works best as an SPA.

Edit and delete functionality was much easier this time around, before this took me quite a while to get edit and delete working, but I got these done with minimal obstacles.


Key Learnings/Takeaways
I think mainly time management worked against me on this one, I don’t feel like I quite made enough use of the time given to me. As I had worked on creating a CRUD app already, I thought getting down the essential 
create functionality would have been easier, but as mentioned above encountering problems with not fully understanding how the front-end interacts with the back-end slowed me down. The lesson is learnt to always 
allow time for errors, which I think is something I learnt as a whole over the course; is that it never goes exactly how you plan it to.



Bugs
I’m currently trying to fix the ‘my recipe’ section as this should only show the user’s recipes, and any that they’ve saved. It’s currently showing the same as the home page.

Strange interface bug when I ‘add ingredient’ each time it shifts the form over to the right with each click.


Future Improvements
Creating the meal plan page is the obvious improvement but beyond that, I want to add the ability to rate a recipe out of 5 stars and show the average rating. I want the users to be able to comment and save any recipes 
to their recipe list so that they can use them to meal prep. 

I’d also like the user to have the ability to add images to their recipes, this will help with the UI design as currently I’m happy with everything but how the recipe’s are displayed.
