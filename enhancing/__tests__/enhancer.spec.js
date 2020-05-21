const {succeed, fail, repair, get} = require('../enhancer.js');

// test away!
describe("enhancer", () => {

  // test repair function
  it('should repair durability to 100', () => {
    const item = {
      name: 'foo', 
      enhancement: 1, 
      durability: 50
    };
    expect(repair(item)).toEqual({...item, durability:100});
  });

  // test succeed function
  it('should succeed and add 1 to enhancement', () => {
    const item2 = { 
      name: 'foobar', 
      enhancement: 1,
    };
    // add 1 to value of enhancement
    item2.enhancement += 1;
    expect(succeed(item2)).toEqual({...item2})
  });

  // test fail function
  it('should fail', () => { 
    const item3 = {
      name: 'bar', 
      enhancement: 1,
      durability: 49 
    };
    item3.durability -= 10;
    expect(fail(item3)).toEqual({...item3});
  });
  // it.todo('should get something');
})