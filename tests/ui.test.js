const {test, expect} = require('playwright/test');
const appURL = 'http://localhost:3000';
test('Verigy "All books" link is visible', async ({page}) => {
    //Open the application
    await page.goto(appURL);

    //Locate page toolbar
    await page.waitForSelector('nav.navbar');

    //Get all books link
    const allBooksLink = await page.$('a[href="/catalog"]');

    //Check if element is visible
    const isElementVisble = await allBooksLink.isVisible();

    //Verify the element is visible
    expect(isElementVisble).toBe(true);
})

test('Verify That the "Login" Button Is Visible', async ({page}) => {
    //Open the application
    await page.goto(appURL);

    //Locate page toolbar
    await page.waitForSelector('nav.navbar');

    //Get all books link
    const loginButton= await page.$('a[href="/login"]');

    //Check if element is visible
    const isLoginButtonVisible = await loginButton.isVisible();

    //Verify the element is visible
    expect(isLoginButtonVisible).toBe(true);
})

test('Verify That the "Register" Button Is Visible', async ({page}) => {
    //Open the application
    await page.goto(appURL);

    //Locate page toolbar
    await page.waitForSelector('nav.navbar');

    //Get all books link
    const registerButton= await page.$('a[href="/register"]');

    //Check if element is visible
    const isRegisterButtonVisible = await registerButton.isVisible();

    //Verify the element is visible
    expect(isRegisterButtonVisible).toBe(true);
})

