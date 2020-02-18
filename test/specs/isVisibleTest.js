describe("Test Checkbox Buttons Page", () => {
  browser.url(
    "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  // browser.setViewportSize({
  //   width: 1200,
  //   height: 800
  // });

  it("Should be able to focus on checkbox button elements", (done) => {
    browser.pause(2000);
    // input[(value = "option-1")];
    // #checkboxes > label:nth-child(1)
    const selector = $("#checkboxes label:nth-of-type(1) [type]")
    selector.click();
    var checkboxButtonOne = selector.hasFocus(
      "#checkboxes label:nth-of-type(1) [type]"
    );
    console.log("Checkbox button one has a value of: " + checkboxButtonOne);
    expect(checkboxButtonOne, "The checkbox (One) should have focus!").to.be
      .true;

    var checkboxButtonTwo = browser.hasFocus(
      "#checkboxes label:nth-child(5) [type]"
    );
    console.log("Checkbox button two has a value of: " + checkboxButtonTwo);
    expect(checkboxButtonTwo, "The checkbox (Two) should have focus!").to.be
      .false;
  });
});
