const {succeed, fail, repair, get} = require('../enhancer.js');

// test away!
describe("enhancer", () => {
  it('should repair durability to 100', () => {
    const item = {
      name: 'foo', 
      enhancement: 1, 
      durability: 50
    };
    expect(repair(item)).toEqual({...item, durability:100});
  });

  it('should succeed', () => {
    const item2 = { 
      name: 'foobar', 
      enhancement: 1,
    };
    item2.enhancement += 1;
    expect(succeed(item2)).toEqual({...item2})
  });
  // it.todo('should fail');
  // it.todo('should get something');
})