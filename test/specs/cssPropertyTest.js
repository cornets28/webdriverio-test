describe("should test webdriverio home page property", () => {
  it("Output the height of the homepage carousel", () => {
    const url = "http://www.webdriveruniversity.com/";
    browser.url(url);
    browser.pause(2000);

    let divCarousel = $("#udemy-promo-thumbnail");
    let height = divCarousel.getCSSProperty("height");
    console.log(height);
  });
});
