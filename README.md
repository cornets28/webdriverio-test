## To install Selenium standalone:

run: `./node_modules/.bin/selenium-standalone install`

## To run Selenium standalone:

run `./node_modules/.bin/selenium-standalone start`

## To heck if Selenium Stadalone server is successfully installed:

run `http://localhost:4444/wd/hub/static/resource/hub.html`

## To run all the tests:

`npm test`

## To run a specific test with debug (example for ajaxClickTest.js):

`DEBUG=true npm test -- --spec=ajaxClickTest.js`

## To run a specific test (example for ajaxClickTest.js):

`npm test -- --spec=ajaxClickTest.js`
