const {test, expect} = require('playwright/test');
const appURL = 'http://localhost:3000';
test('Verify "All books" link is visible', async ({page}) => {
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

    //Get login link
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

    //Get register link
    const registerButton= await page.$('a[href="/register"]');

    //Check if element is visible
    const isRegisterButtonVisible = await registerButton.isVisible();

    //Verify the element is visible
    expect(isRegisterButtonVisible).toBe(true);
})

test('Verify logout button link is visible after user login', async ({page}) => {
    //Open the application
    await page.goto(appURL);

    //Locate page toolbar
    await page.waitForSelector('nav.navbar');

    //Get login link
    const loginLink = await page.$('a[href="/login"]');

    // Click on login button
    await loginLink.click();

    //Fill user data
    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');
    await page.click('input[type="submit"]');

    //Locate page toolbar
    await page.waitForSelector('nav.navbar');

    //Get loguot button
    const logoutBtn = await page.$('#logoutBtn');

    //Check if element is visible
    const logoutBtnVisible = await logoutBtn.isVisible();
    //Check logout btn text 
    const logoutBtnText = await logoutBtn.textContent();

    //Verify the element is visible
    expect(logoutBtnVisible).toBe(true);

    //Verify the logout btn text content
    expect(logoutBtnText).toEqual("Logout");
})