beforeEach(() => {
  browser.url("http://www.webdriveruniversity.com/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', () => {
  it('Button display is set to non display but still exists in html dom therefore should return true', (done) => {
    const selector = $("#not-displayed");
    let isEnabled = selector.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', (done) => {
    const selector = $("#visibility-hidden");
    let isEnabled = selector.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', (done) => {
  
     const selector = $("#zero-opacity");
    let isEnabled = selector.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Header text is visible and exists in the html dom therefore should return true', (done) => {
    const selector = $("h1");
    let isEnabled = selector.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });
  
  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', (done) => {
    const selector = $("#no-such-element");
    let isEnabled = selector.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});