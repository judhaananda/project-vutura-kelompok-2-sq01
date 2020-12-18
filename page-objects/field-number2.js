module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        fieldNumber2: by.xpath("//input[@placeholder='Telepon']")
    },

    performFill: function () {

        var selector = page.fieldNumber2.elements.fieldNumber2;
        return driver.findElement(selector).sendKeys(shared.profileid.number2);
    }
};