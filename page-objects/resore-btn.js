module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        restoreBtn: by.xpath("//button[normalize-space()='Perbarui']")
    },

    performClick: function () {

        var selector = page.resoreBtn.elements.restoreBtn;
        return driver.findElement(selector).click();
    }
};
