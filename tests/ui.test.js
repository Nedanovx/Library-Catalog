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

test('Verify My Books button link is visible after user login', async ({page}) => {
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

    //Get My books button
    const myBookBtn = await page.$('a[href="/profile"]');

    //Check if element is visible
    const myBookBtnVisible = await myBookBtn.isVisible();
    //Check My books btn text 
    const myBookBtnText = await myBookBtn.textContent();

    //Verify the element is visible
    expect(myBookBtnVisible).toBe(true);

    //Verify the My books btn text content
    expect(myBookBtnText).toEqual("My Books");
})

test('Verify Add Book button link is visible after user login', async ({page}) => {
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

    //Get add book button
    const addBookBtn = await page.$('a[href="/create"]');

    //Check if element is visible
    const myBookBtnVisible = await addBookBtn.isVisible();
    //Check add book btn text 
    const addBookBtnText = await addBookBtn.textContent();

    //Verify the element is visible
    expect(myBookBtnVisible).toBe(true);

    //Verify the add books btn text content
    expect(addBookBtnText).toEqual("Add Book");
})

test('Verify That the User\'s Email Address Is Visible', async ({page}) => {
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

    //Get user's email span element
    const element = await page.$('#user > span');

    //Check if element is visible
    const spanElement = await element.isVisible();
    //Check span element text 
    const spanText = await element.textContent();

    //Verify the element is visible
    expect(spanElement).toBe(true);

    //Verify the span text content
    expect(spanText).toEqual("Welcome, peter@abv.bg");
})