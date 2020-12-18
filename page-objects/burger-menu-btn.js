module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        burgerMenuBtn: by.css(".btn-menu")
    },

    performClick: function () {

        var selector = page.burgerMenuBtn.elements.burgerMenuBtn;
        return driver.findElement(selector).click();
    }
};