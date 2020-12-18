module.exports = function () {
    this.Given(/^user browse login page2$/, function () {
       helpers.loadPage("https://dashboard.vutura.io/signin")
      });

    this.Given(/^user fill email field2$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();
        });
      });

    this.Given(/^user fill password field2$/, function ( ) {
        driver.then(function () {
            return page.fieldPw.performFill();

        });
      });

    this.Given(/^user click login button2$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();

        });

      });

    this.Given(/^user click burgermenu button2$/, function () {
        driver.wait(until.elementsLocated(by.xpath("//div[@class='mb-0 mb-sm-6 white--text headline']")),30000).then(function () {
            return page.burgerMenuBtn.performClick();

        });

      });
      
    this.When(/^user click logout button2$/, function () {
        driver.then(function () {
            return page.logoutBtn.performClick();

      });
    });

    this.Then(/^user can see login page$/, function () {
        return driver.findElements(by.xpath("//input[@id='email-login']"))
        
            .then(function (elements) {
              
                // verify this element has children
                expect(elements.length).to.not.equal(0);
            });
    });

}