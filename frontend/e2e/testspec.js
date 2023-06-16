describe('e2e test', function () {
    it('to check the page title', function () {
        browser,
            ingoreSynchronization = true;
        browser.get('http://localhost:4200');
        browser.driver.getTitle().then(function (pageTitle) {
            expect(pageTitle).toEqual('Frontend');
        });
        //login
        //add product
        //make order
    });
    //it
    //
})

