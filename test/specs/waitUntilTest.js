beforeEach(function() {
  browser.url("http://www.webdriveruniversity.com/Accordion/index.html");
});

describe("Validate the loading functionality works correctly", function() {
  it("Verify relevant text LOADING COMPLETE appears after a period of time", function() {
    this.timeout(20000);
    browser.waitUntil(
      function() {
        let elem = $("#hidden-text")
        return elem.getText("#hidden-text") === "LOADING COMPLETE.";
        console.log(elem.getText("#hidden-text"));
      },
      12000,
      "expected text to be different!"
    );
  });
});
