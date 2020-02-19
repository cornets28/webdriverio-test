beforeEach(function() {
  browser.url("http://www.webdriveruniversity.com/Accordion/index.html");
});

describe("Validate text is present", function() {
  it("Verify text exists within the loading div container", function() {
    this.timeout(20000);
    let elem = $("#hidden-text");
    var text = elem.waitForValue(2000);
    console.log(text);
  });
});
