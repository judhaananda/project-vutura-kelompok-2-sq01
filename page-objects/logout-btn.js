module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        logoutBtn: by.xpath("//div[contains(text(),'Keluar')]")
    },

    performClick: function () {

        var selector = page.logoutBtn.elements.logoutBtn;
        return driver.findElement(selector).click();
    }
};