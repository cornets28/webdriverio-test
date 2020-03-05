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

## Install jenkins, go to:

1. go to: `https://jenkins.io/download/`
2. download the `Generic Java Package (.war)`
3. cd to the .war folder directory in you terminal
4. run: `java -jar jenkins.war --httpPort=5555 --enable-future-java`
5. open up your browser and type: `http://localhost:5555`
6. navigate to the generated directory
7. gragb the unique and paste it in you generated browser jenkins browers input
8. select one of the 2 options and wait for installation to finsih
9. specify a username, password, confirma password, full name, email address and
10. press save and continue to start using jenkins
11. remember to always start `(see #4)` jenking on your terminal by triggering the .war file
