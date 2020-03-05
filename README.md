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

## To run a all tests (example for ajaxClickTest.js):

`npm test`

## for the reports section, we added the following code in the wdio.conf.js file:

`reporters: ["dot", "junit"], reporterOptions: { junit: { outputDir: "./reports/junit-result/" } }`

### and we run:

`npm install wdio-junit-reporter --save-dev`

## To generate allure command, run:

`npm install -g allure-commandline --save-dev`

## and then run:

`allure generate /fullpathOfAllureResultsFolder/` ex: `allure generate /Users/SC/Desktop/webdriverio-test/allure-results`

## To generate allure report, run:
`allure open`
