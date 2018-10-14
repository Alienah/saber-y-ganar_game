# saberYganar
Game of questions and answers. 

This app has been created to try different ways of testing.

There are several branches and each one has one kind of testing.

- master has some test developed with Jest
- test-jasmine has an spec file with a tdd approximation using Jasmine. It is on initial steps, so needs to be developed in deep. You need to lauch on your server the specrunner.html file to see the tests.
- test-puppeteer has some tests using Puppeteer
- test-cypress has others using just cypress

## For each branch:

First install your dependencies:

- npm install

To launch server:

- Go to the terminal
- node server.js

Then, lauch the server of the app and open the index.html file, for example with live server

## For cypress
To lauch tests in browser:

- node_modules/.bin/cypress open

To lauch tests headlessly:

- node_modules/.bin/cypress run

This mode (headless) will generate some screenshots and videos that will be stored inside cypress folder

