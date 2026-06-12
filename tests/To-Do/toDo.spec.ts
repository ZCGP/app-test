import {test, expect} from '@playwright/test';

test('To-Do List',async({page}) =>{

    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByPlaceholder('What needs to be done?').fill("casa");
} )