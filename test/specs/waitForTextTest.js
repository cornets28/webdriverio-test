

beforeEach(function() {
  browser.url("//www.webdriveruniversity.com/Accordion/index.html");
});
describe("Verify that the correct text appears on the accordion page", function() {
  it("Verify loading complete text is visible after a set duration of time", function() {
    this.timeout(20000)
   elem = $('#hidden-text');
   console.log("Current Textis: ", elem.getText())
   browser.pause(3000)
  //  elem.waitForVisible(3000);
  while (elem.getText() != 'LOADING COMPLETE.') {
    browser.pause(1000)
  }
   console.log("Current Textis: ", elem.getText());

  });
});
