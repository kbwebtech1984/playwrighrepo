import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
console.log('beforeall');
});

test.afterAll(async()=>{
console.log('after all');
});

test.beforeEach(async()=>{
console.log('before each test1');
});

test.afterEach(async()=>{
console.log('after each test1');
});

test('test1',async ({page})=>
{
    console.log('test1');
});

test('test2',async ({page})=>
{
    console.log('test2');
});




