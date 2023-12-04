# TrainFinder
Search for trains easily.
<ul>
  <li>User can view train details using train number.
  <li>User can find trains between two stations on a particular date. 
  <li>User can view the route of a train. 
  <li>User can view the number of seats available, seat type and the fare. 
  <li>User can view the days during which the train runs, the journey duration and the distance in kilometres. 
  <li>Front end is made using ReactJS and CSS. The backend is made using NodeJS and expressJS.
</ul>

<h3>The different pages and features available are:</h3>
<li>Home Page: https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/bd98911b-a394-418f-bec1-9957db35643c
<br><br>
<img src="https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/bd98911b-a394-418f-bec1-9957db35643c" width="1200" height="300"><br><br>
<li>Search Train by train Number: https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/75fad7ed-1577-4d78-a403-e32820330cf0
 <br><br>
<img src="https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/75fad7ed-1577-4d78-a403-e32820330cf0" width="1200" height="300"><br><br><br>
<li>Show Route of Train: https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/c4fd4696-e86e-4b22-8b6b-4aea3a401af9
 <br><br>
<img src="https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/c4fd4696-e86e-4b22-8b6b-4aea3a401af9" width="1200" height="500"><br><br><br>
<li>Search Between Stations Page:  https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/a30f314c-1619-4eba-9fc9-eb6b3bf49c6d
<br><br>
<img src="https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/a30f314c-1619-4eba-9fc9-eb6b3bf49c6d" width="1200" height="300"><br><br><br>
<li>Auto Suggestion of stations name: https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/3f4a9c97-a5a6-47a0-ab99-5a783be6ce7f
<br><br>
<img src="https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/3f4a9c97-a5a6-47a0-ab99-5a783be6ce7f" width="1200" height="300"><br><br><br>
<li>Search Between Stations using Date: https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/76ea1579-e1fa-48e6-9eb7-d602718cd971
<br><br>
<img src="https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/76ea1579-e1fa-48e6-9eb7-d602718cd971" width="1200" height="600"><br><br><br>
<li>View Seat Availability and fare: https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/321be021-8625-4d6e-ac95-b81771d6d358
<br><br>
<img src="https://github.com/Samudranil-silenthero/TrainFinder/assets/64492700/321be021-8625-4d6e-ac95-b81771d6d358" width="1200" height="600"><br><br><br>
  
<h3>How to run it?</h3>

## You need the following installations:
- MongoDB
- Node
- npm

Note that client (my-app) and server (api) needs to run concurrently in different terminal session so that they can communicate with each other.
     
## Client-side (PORT: 3000)
     
```terminal
$ cd my-app
$ npm i   
$ npm start
     
```
## Server-side (PORT: 5000)

### Configure your .env file

Configure MONGO_URL, PORT=5000, USER_MAIL (mail from where admin will be sending OTPs), MAILPSWD and JWT_KEY. MAILPSWD is to be genrated. Follow this link (https://www.getmailbird.com/gmail-app-password/)

```terminal
$ cd api 
$ npm i    
$ npm start 
```
## Use this extension to get rid of CORS errors: 
https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?pli=1
