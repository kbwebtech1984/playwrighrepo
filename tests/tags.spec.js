import {test, expect} from '@playwright/test'

test('testcase1 @smoke', async()=>
{
    console.log('testcase1 with smoke');

})
test('testcase2 @regression', async()=>
{
    console.log('testcase2 with regression');

})

test('testcase3', {tag :['@regression','@smoke'] }, async()=>
{
    console.log('testcase3 with regression and smoke');

})