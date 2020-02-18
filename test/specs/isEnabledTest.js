beforeEach(function() {
  browser.url(
    "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  // browser.setViewportSize({
  //   width: 1200,
  //   height: 800
  // });
  browser.pause(2000);
});

describe("Test Enabled Dropdown Menus, Checkboxes & Radio Buttons", function() {
  it("Dropdown item orange is disabled therefore should return false", function(done) {
    let elem = $('option[value = "orange"]');
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });

  it("Dropdown item grape is enabled therefore should return true", function(done) {
    let elem = $('option[value = "grape"]');
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Option2 is enabled therefore should return true", function(done) {
    let elem = $('input[value = "option-2"]');
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Radio button pumpkin is enabled therefore should be true", function(done) {
    let elem = $('input[value = "pumpkin"]');
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Radio button cabbage is disabled therefore should be false", function(done) {
    let elem = $('input[value = "cabbage"]');
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});
