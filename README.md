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

## install jenkins plugins:

12. click on`Manage Jenkins`
13. click on`Manage Plugins`
14. click on the `available` tab and type `NodeJs`
15. select the `NodeJS` and click on `Install without restart`
16. click on the `available` tab and type `HTML Publisher`
17. select the `HTML Publisher` and click on `Install without restart`
18. click on the `available` tab and type `HTML Publisher`
19. select the `HTML Publisher` and click on `Install without restart`
20. go ba to main jenkins page and click on `Manage Jenkins`
21. click on `Global Tool Configuration`
22. scroll down and click on `add NodeJS`
23. input a name and select on `install automatically`
24. into the text field `Global npm pakages refresh hours`, put `bower@~1.8.0 grunt-cli@~1.2.0`
25. click on `Apply` and `Save`
26. go back to Jenkins' main page and click on `Configure System`
27. scroll down and select `Environmetn Variable`
28. click on `Add`
29. input into Name text field `PATH`
30. input into Value text field `$PATH:`
31. go in to you hard drive and find the `bin` directory: `/usr/local/bin`
32. copy and paste in the value text field: `$PATH:/usr/local/bin`
33. cick on `save`

## Start using Jenkins, create a Jenkins project, do:

34. on the Jenkins main page, click on `create new jobs`
35. provide it with a name and click on `ok`
36. on the `General` tab, scrol down
37. click on the `advanced` tab and look for `Use custom workspace`
38. select it.
39. go to your application, search for your `.bin` folder and the the directory. ex: `/Users/sc/Desktop/webdriverio-test/node_modules/.bin`
40. paste that directory into the directory text field.
41. provide it with a name and click on `Apply`
42. select on `This project is parameterized` and select `String parameter`
43. provide it with a name (`baseUrl`) and a default value (you default url. ex: `http://www.webdriveruniversity.com/`)
44. click on `Apply`
45. you can add you git url, optional
46. go down to the `build` section, click on `Execute shell`
47. type in the the `command` text area `npm install npm test -- --baseUrl="$baseUrl"`
48. click on `save`
49. go to main page and click on `Build with Parameters` and clik on `Build`
50. click on the `Build History` or `Console Output` to see your tests runing.

## Jenkins configuration to run a specific test, do:

51. click on `add Parameter` and select `String parameter`
52. provide it with a name (`automationTest`) and a default value (your default should the name on file . ex: `pageObjectModelTest2.js`)
53. go down to the `build` section, click on `Execute shell`
54. type in the the `command` text area `npm install npm test -- --baseUrl="$baseUrl" --spec="$automationTest"`
55. click on `save`
56. go to main page and click on `Build with Parameters` and clik on `Build`
57. click on the `Build History` or `Console Output` to see your specific test runing.

## To hange different loggi type, do:
58. click on `add Parameter` and select `String parameter`
<!-- There are many different log type you can give as default value, such as: `verbose, silent, command, data, and result` -->
59. provide it with a name (`logType`) and a default value (your default should the name on file . ex: `silent`)
60. go down to the `build` section, click on `Execute shell`
61. type in the the `command` text area `npm install npm test -- --baseUrl="$baseUrl" --spec="$automationTest" --logLevel="$logType"`
62. click on `save`
63. go to main page and click on `Build with Parameters` and clik on `Build`
64. click on the `Build History` or `Console Output` to see your specific test runing.
