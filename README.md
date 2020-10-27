<p align="center">
  <img alt="Star Wars" src="./star_wars.jpg" width="480">
</p>

# Save The Galaxy

Hello my fellow jedi warrior! ⚔ Master Yoda has assigned you with a mission that
is critical in order to save the Galaxy and our very reality as we know it! In
order to do so it is critical that we get intel on the 20 fattest characters in
the galaxy. In simpler words, _we need a list of the fattest characters in the
star wars universe_. Their fatness level will be determined according to their
_Body Mass Index_ or **BMI** for short. We believe in you, may the source be with you!

The SWAPI should have the info you need. [swapi.dev](https://swapi.dev/)

# Body Mass Index

The formular for BMI goes as follows:

```text
weight / (height²)
```

# Setup

Start by forking and cloning this repository.

Make sure you have the following dependencies installed:

- Node - [Install NodeJs](https://nodejs.org/en/download/)
- Yarn - [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)

Then you can run the command below in order to install all dependencies and get the project initialized.

```shell script
yarn install
```

The boilerplate should be runnable from start. You can make sure of this by running the command bellow in the project
root directory:

```shell script
yarn test && yarn start
```

Awesome! You are now upp and running! ✨ Now go grab a big cup of coffee ☕️ and do whatever warmup routine you do in
order spawn some binary awesomeness!!!

# Layout

The boilerplate is divided into two projects. You can find them under the `packages/` directory.
_`packages/frontend/`_ contains the frontend code, and _`packages/backend/`_ contains the backend code.
Both projects are written in Typescript, and all files are formatted with Prettier, and linted with EsLint 💃

## Frontend

The frontend is a simple Create React App project written in Typescript. Some boilerplate is provided for accessing the list of fat
characters.

### Challenges

1. Implement pagination to load additional characters from the backend API.
2. Add filters to the character list (e.g., by gender or by species).
3. Implement a search function to search for specific characters.
4. Style the character list to make it more visually appealing.
5. Add unit tests to the frontend code.

## Backend

Dead simple node project that uses Koa for http server and routing. A boilerplate resolver is provided for your
convenience.

### Challenge

1. Modify the /top-fat-characters endpoint to return the top 20 characters based on a different attribute (e.g., height or weight).
Add error handling to the /top-fat-characters endpoint.

# Definition of Done

The task is complete when a proper list of the top 20 fattest characters are shown in the frontend to the user. The
data should be provided from [swapi.dev](https://swapi.dev/).

# Submitting the Test

Once you are done please email the contact you have here at Code Labs with a link to your repository, and we will start
reviewing it.

# Time frame

We believe this assignment will take roughly 4 hours to complete.

# Technical Discussion

Once we have reviewed the test you will be invited for a second interview where will talk some code and get to know
each other 😄 We will of course talk a lot about the test. Remember that we understand that you cannot write a
production ready solution in just 4 hours, so no pressure on writing a perfect solution. We do however have some
expectations though:

- The solution should build and run, or more specifically, the commands `yarn start` and `yarn test` should
  return successfully
- We do expect for obvious reasons that you are familiar with your code, we will ask you to explain parts of your
  code, and to reason about technical decisions. So it might be a good idea to read through you code again before the
  discussion.

During the discussion we are not going to put much effort into grilling you about the history of JavaScript, "why eval
is bad?" or "what differs double from tripple-equals?", instead we are going to focus more on code organization, good
development patterns, how to cope with regression, and how to maintain good code quality.

Don't worry! We believe you got this! So just take it chill, and we're going to have a great time!

# Bonus Points

- Testing - Any decent developer can code, but it takes a master to write good tests, right! If you have some spare
  time, please show us a sample of your testing skills!
- Pagination - A static list of 20 characters is good and all, but what if we need more info! 🙈
- CSS - Solving the problem shows that you know some JS, but can you style? 👀 Maybe you can show off some CSS
  skills and make the site a little prettier!
- Error Handling - How do you handle errors in your code? Show us how you would improve the error handling!
- Code Optimization - Is there any way to optimize the code, both in terms of performance and readability?
- Code Design - How would you design the code if we added more features, like filtering by a specific attribute, or
  searching for characters by name? Can you show us how you would implement these features?
