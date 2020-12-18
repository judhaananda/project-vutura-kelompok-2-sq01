module.exports = function () {
    this.Given(/^user browse signin page6$/, function () {
        helpers.loadPage('https://dashboard.vutura.io/signIn')
        
      });
      this.Given(/^user fill email field6$/, function () {
        driver.then(function (){
            return page.fieldEmail.performFill();
        });
        
      });
      this.Given(/^user fill password field6$/, function () {
        driver.then(function (){
            return page.fieldPw.performFill();
        });
      });
      this.Given(/^user click login button6$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();

        });
    });
    this.Given(/^user click menu button6$/, function () {
      driver.wait(until.elementsLocated(by.xpath("//i[@class='v-icon notranslate mdi mdi-menu theme--light white--text']")),100000).then(function () {
          return page.menuBtn.performClick();
          
        });
      });
      this.Given(/^user click profil button6$/, function () {
        driver.wait(until.elementsLocated(by.xpath("//div[contains(text(),'Profil')]")),100000).then(function () {
            return page.profilBtn.performClick();
            
          });
        });
        this.Given(/^user click edit button6$/, function () {
          driver.wait(until.elementsLocated(by.xpath("//button[@class='button float-right']")),100000).then(function () {
              return page.editBtn.performClick();
              
            });
          });
          this.Given(/^user fill name field6$/, function () {
            driver.then(function () {
                return page.fieldName.performFill();
                
              });
            });
            this.Given(/^user fill business field6$/, function () {
              driver.then(function () {
                  return page.fieldBusiness.performFill();
                  
                });
              });
              this.Given(/^user fill number field6$/, function () {
                driver.then(function () {
                    return page.fieldNumber2.performFill();
                    
                  });
                });
                this.When(/^user click restore button6$/, function () {
                  driver.wait(until.elementsLocated(by.xpath("//button[normalize-space()='Perbarui']")),100000).then(function () {
                      return page.resoreBtn.performClick();
                    });
                  });
                  this.Then(/^user see failed the profile edited$/, function () { //Tidak bisa jalan, harus di develop
                    return driver.findElements(by.xpath("//label[contains(text(),'Telepon')]"))
            
                        .then(function (elements){
            
                            //verify this element has children
                            expect(elements.length).to.equal(1);
                        });
                });
            }