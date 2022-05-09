// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:4200/');
    expect(browser.getTitle()).toEqual('E2eTinder');
  });

  it('should woking match', () => {
    let likeBtn = element(by.className('like'));
    likeBtn.click();
    expect(element(by.className('dialog'))).toBeTruthy();
  });

  it('should woking like', () => {
    element(by.className('name')).getAttribute("data-id").then(function (firstValue) {
      let firstCardId = firstValue;
      let dialogBtn = element(by.className('close'));
      dialogBtn.click();
      element(by.className('name')).getAttribute("data-id").then(function (secondValue) {
        let secondCardId = secondValue;
        expect(firstCardId).not.toEqual(secondCardId);
      })
    });
  });

  it('should woking dislike', () => {
    element(by.className('name')).getAttribute("data-id").then(function (firstValue) {
      let firstCardId = firstValue;
      let dislikeBtn = element(by.className('dislike'));
      dislikeBtn.click();
      element(by.className('name')).getAttribute("data-id").then(function (secondValue) {
        let secondCardId = secondValue;
        expect(firstCardId).not.toEqual(secondCardId);
      })
    });
  });

});