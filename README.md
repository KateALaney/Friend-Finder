# Friend-Finder
Friend-Finder is an application that allows users to fill in a survey and submit it to find a match for a new friend.

## Introduction
Friend-Finder uses an HTML-and-Javascript-based survey to gather data on a user's characteristics and preferences, stores that data as a JSON object, and then compares it with data already stored to match the new user with a "friend".  The survey and home pages also have links which allow users to view the scores of friends to see where they are compatible.

## Deployed Link
https://cryptic-harbor-07956.herokuapp.com/

## Project Requirements
1. The survey should have 10 questions, each of which has an answer scaled 1 to 5, with 1 being "strongly disagree" and 5 being "strongly agree".
2. The `server.js` file should use the npm packages `express` and `path`.
3. The `htmlRoutes.js` file should include two routes: a) a `GET` route to `/survey`, which should display the survey page; and b) a default route which leads to `home.html`, displaying the home page.
4. The `apiRoutes.js` file should containe two routes: a) a `GET` route with the url `/api/friends`, which will be used to the display a JSON of all possible friends; and b) a `POST` route `/api/friends`, which will be used to handle any incoming survey results, as well as the compatability logic.
5. Application data should be saved inside of a `friends.js` file as an array of objects.
6. The user's most compatible friend should be determined by converting each user's results into a simple array of numbers, comparing the difference between the current user's scores against those from other users, and adding the differences to calculate `totalDifference`.
7. Once the user's most compatible friend has been determined, display the result as a modal pop-up, which should display both the name and picture of the closest match.

## Technologies Used
1. HTML
2. Bootstrap
3. Javascript
4. jQuery
5. Node.js
6. Express
