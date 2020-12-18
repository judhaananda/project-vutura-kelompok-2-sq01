module.exports = function () {
    this.Given(/^user browse signin page5$/, function () {
        helpers.loadPage('https://dashboard.vutura.io/signIn')
        
      });
      this.Given(/^user fill email field5$/, function () {
        driver.then(function (){
            return page.fieldEmail.performFill();
        });
        
      });
      this.Given(/^user fill password field5$/, function () {
        driver.then(function (){
            return page.fieldPw.performFill();
        });
      });
      this.Given(/^user click login button5$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();

        });
    });
    this.Given(/^user click menu button5$/, function () {
      driver.wait(until.elementsLocated(by.xpath("//i[@class='v-icon notranslate mdi mdi-menu theme--light white--text']")),100000).then(function () {
          return page.menuBtn.performClick();
          
        });
      });
      this.Given(/^user click profil button5$/, function () {
        driver.wait(until.elementsLocated(by.xpath("//div[contains(text(),'Profil')]")),100000).then(function () {
            return page.profilBtn.performClick();
            
          });
        });
        this.Given(/^user click edit button5$/, function () {
          driver.wait(until.elementsLocated(by.xpath("//td[contains(text(),'name')]")),100000).then(function () {
              return page.editBtn.performClick();
              
            });
          });
          this.Given(/^user fill name field5$/, function () {
            driver.then(function () {
                return page.fieldName.performFill();
                
              });
            });
            this.Given(/^user fill business field5$/, function () {
              driver.then(function () {
                  return page.fieldBusiness.performFill();
                  
                });
              });
              this.Given(/^user fill number field5$/, function () {
                driver.then(function () {
                    return page.fieldNumber.performFill();
                    
                  });
                });
                this.When(/^user click restore button5$/, function () {
                  driver.then(function () {
                      return page.resoreBtn.performClick();
                    });
                  });
                  this.Then(/^user see the profile edited5$/, function () { //tidak bisa jalan, harus di develop
                    return driver.findElements(by.xpath("//img[@src='vutura.png']"))
            
                        .then(function (elements){
            
                            //verify this element has children
                            expect(elements.length).to.equal(1);
                        });
                });
            }