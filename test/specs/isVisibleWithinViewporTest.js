beforeEach(function() {
  browser.url("http://www.webdriveruniversity.com/Hidden-Elements/index.html");
});

describe("Test whether specific elements are visible within viewport", function() {
  it("should resize the current viewport", function() {
    browser.fullscreenWindow();
    browser.pause(2000);

    var windowSize = browser.fullscreenWindow();
    console.log(windowSize.value);
  });

  it("should detect if an element is visible", function() {
    var isVisibleWithinViewport = browser.isVisibleWithinViewport(
      "#not-displayed"
    );
    console.log(isVisibleWithinViewport); //false

    var isVisibleWithinViewport = browser.isVisibleWithinViewport(
      "#visibility-hidden"
    );
    console.log(isVisibleWithinViewport); //false

    var isVisibleWithinViewport = browser.isVisibleWithinViewport(
      "#zero-opacity"
    );
    console.log(isVisibleWithinViewport); //false

    var isVisibleWithinViewport = browser.isVisibleWithinViewport("h1");
    console.log(isVisibleWithinViewport); //true
  });
});
