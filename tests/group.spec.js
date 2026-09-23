import {test, expect} from '@playwright/test'

test.describe('smoke',()=>{

    test('test1',()=>{

        console.log('test1');
    })
    test('test2',()=>{

        console.log('test2');
    })
});

test.describe('regression',()=>{

    test('test3',()=>{

        console.log('test3');
    })
    test('test4',()=>{

        console.log('test4');
    })
});
test.describe('smoke regression',()=>{

    test('test5',()=>{

        console.log('test5');
    })
    test('test6',()=>{

        console.log('test6');
    })
    
});

