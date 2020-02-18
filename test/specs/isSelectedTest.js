beforeEach(function() {
  browser.url(
    "http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
});

describe("Test Selected Dropdown Menus, Checkboxes & Radio Buttons", function() {
  it("Dropdown item Java is selected therefore should return true", function(done) {
    let element = $('option[value = "java"]');
    console.log(element.isSelected());
    expect(element.isSelected()).to.be.true;
  });

  it("Dropdown item maven is not selected therefore should return false", function(done) {
    let element = $('option[value = "maven"]');
    console.log(element.isSelected());
    expect(element.isSelected()).to.be.false;
  });

  it("Option2 is not selected therefore should return false", function(done) {
    let element = $('input[value = "option-2"]');
    console.log(element.isSelected());
    expect(element.isSelected()).to.be.false;
  });

  it("Option3 is selected therefore should return true", function(done) {
    let element = $('input[value = "option-3"]');
    console.log(element.isSelected());
    expect(element.isSelected()).to.be.true;
  });

  it("Radio button pumpkin is selected therefore should be true", function(done) {
    let element = $('input[value = "pumpkin"]');
    console.log(element.isSelected());
    expect(element.isSelected()).to.be.true;
  });
});
