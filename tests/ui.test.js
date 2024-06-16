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

test('Submit the Form with Valid Credential', async ({page}) => {

     await page.goto(appURL);

     await page.waitForSelector('nav.navbar');
 
     const loginLink = await page.$('a[href="/login"]');
     await loginLink.click();
 
     await page.fill('#email', 'peter@abv.bg');
     await page.fill('#password', '123456');
     await page.click('input[type="submit"]');
     await page.waitForURL(`${appURL}/catalog`);
    await page.$('a[href="/catalog"]');

    expect(page.url()).toBe(`${appURL}/catalog`);
})

test('Submit the Form with Empty Input Fields', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const loginLink = await page.$('a[href="/login"]');
    await loginLink.click();

    await page.click('input[type="submit"]');

   page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('All fields are required!');
    await dialog.accept();
   })

   await page.$('a[href="/login"]');

   expect(page.url()).toBe(`${appURL}/login`);
})

test('Submit the Form with Empty Email Input Field', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const loginLink = await page.$('a[href="/login"]');
    await loginLink.click();

    await page.fill('#password', '123456');
    await page.click('input[type="submit"]');

   page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('All fields are required!');
    await dialog.accept();
   })

   await page.$('a[href="/login"]');

   expect(page.url()).toBe(`${appURL}/login`);
})

test('Submit the Form with Empty Password Input Field', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const loginLink = await page.$('a[href="/login"]');
    await loginLink.click();

    await page.fill('#email', 'peter@abv.bg');
    await page.click('input[type="submit"]');

   page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('All fields are required!');
    await dialog.accept();
   })

   await page.$('a[href="/login"]');

   expect(page.url()).toBe(`${appURL}/login`);
})

test('Submit the register Form with Valid Values', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const registerLink = await page.$('a[href="/register"]');
    await registerLink.click();

    await page.fill('#email', 'ivan@abv.bg');
    await page.fill('#password', '558899');
    await page.fill('#repeat-pass', '558899');
    await page.click('input[type="submit"]');

    await page.$('a[href="/catalog"]');

   expect(page.url()).toBe(`${appURL}/catalog`);
})

test('Submit the Form with Empty Values', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const registerLink = await page.$('a[href="/register"]');
    await registerLink.click();

    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
       })

   await page.$('a[href="/register"]');

   expect(page.url()).toBe(`${appURL}/register`);
})

test('Submit the Form with Empty Email', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const registerLink = await page.$('a[href="/register"]');
    await registerLink.click();

    await page.fill('#password', '558899');
    await page.fill('#repeat-pass', '558899');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
       })

   await page.$('a[href="/register"]');

   expect(page.url()).toBe(`${appURL}/register`);
})

test('Submit the Form with Empty Password', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const registerLink = await page.$('a[href="/register"]');
    await registerLink.click();

    await page.fill('#email', 'zaek@abv.bg');
    await page.fill('#repeat-pass', '558899');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
       })

   await page.$('a[href="/register"]');

   expect(page.url()).toBe(`${appURL}/register`);
})

test('Submit the Form with Empty Confirm Password', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const registerLink = await page.$('a[href="/register"]');
    await registerLink.click();

    await page.fill('#email', 'zaek@abv.bg');
    await page.fill('#password', '558899');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
       })

   await page.$('a[href="/register"]');

   expect(page.url()).toBe(`${appURL}/register`);
})

test('Submit the Form with Different Passwords', async ({page}) => {

    await page.goto(appURL);

    await page.waitForSelector('nav.navbar');

    const registerLink = await page.$('a[href="/register"]');
    await registerLink.click();

    await page.fill('#email', 'zaek@abv.bg');
    await page.fill('#password', '558899');
    await page.fill('#repeat-pass', 'kolelo');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Passwords don\'t match!');
        await dialog.accept();
       })

   await page.$('a[href="/register"]');

   expect(page.url()).toBe(`${appURL}/register`);
})

test('Submit the Form with Correct Data', async ({page}) => {

    await page.goto(`${appURL}/login`);

    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL(`${appURL}/catalog`)
    ]);

    await page.click('a[href="/create"]');
    await page.waitForSelector('#create-form');

    await page.fill('#title', 'Test Book');
    await page.fill('#description', 'Test book description');
    await page.fill('#image', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbooks%2Bclipart&psig=AOvVaw0vWo3cRi6nUtLxcySc7tBG&ust=1718036754298000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCjo-b3zoYDFQAAAAAdAAAAABAE')
    await page.selectOption('#type', 'Classic');
    await page.click('#create-form input[type="submit"]');

    await page.waitForURL(`${appURL}/catalog`);

    expect(page.url()).toBe(`${appURL}/catalog`);
})

test('Submit the Form with Empty Title Field', async ({page}) => {

    await page.goto(`${appURL}/login`);

    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL(`${appURL}/catalog`)
    ]);

    await page.click('a[href="/create"]');
    await page.waitForSelector('#create-form');

    await page.fill('#description', 'Test book description');
    await page.fill('#image', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbooks%2Bclipart&psig=AOvVaw0vWo3cRi6nUtLxcySc7tBG&ust=1718036754298000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCjo-b3zoYDFQAAAAAdAAAAABAE')
    await page.selectOption('#type', 'Classic');
    await page.click('#create-form input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
       })

    await page.waitForURL(`${appURL}/create`);

    expect(page.url()).toBe(`${appURL}/create`);
})

test('Submit the Form with Empty Description Field', async ({page}) => {

    await page.goto(`${appURL}/login`);

    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL(`${appURL}/catalog`)
    ]);

    await page.click('a[href="/create"]');
    await page.waitForSelector('#create-form');

    await page.fill('#title', 'Test Book');
    await page.fill('#image', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dbooks%2Bclipart&psig=AOvVaw0vWo3cRi6nUtLxcySc7tBG&ust=1718036754298000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCjo-b3zoYDFQAAAAAdAAAAABAE')
    await page.selectOption('#type', 'Classic');
    await page.click('#create-form input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
       })

    await page.waitForURL(`${appURL}/create`);

    expect(page.url()).toBe(`${appURL}/create`);
})

test('Submit the Form with Empty Image URL Field', async ({page}) => {

    await page.goto(`${appURL}/login`);

    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL(`${appURL}/catalog`)
    ]);

    await page.click('a[href="/create"]');
    await page.waitForSelector('#create-form');

    await page.fill('#title', 'Test Book');
    await page.fill('#description', 'Test book description');
    await page.selectOption('#type', 'Classic');
    await page.click('#create-form input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
       })

    await page.waitForURL(`${appURL}/create`);

    expect(page.url()).toBe(`${appURL}/create`);
})