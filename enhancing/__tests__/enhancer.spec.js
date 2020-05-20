const {succeed, fail, repair, get} = require('../enhancer.js');

// test away!
describe("enhancer", () => {
  it('should repair something', () => {
    const item = {
      name: 'foo', 
      enhancement: 1, 
      durability: 50
    };
    const repairedItem = {...item, durability: 100};
    expect(repair(item)).toEqual(repairedItem);
  });

  // it.todo('should succeed');
  // it.todo('should fail');
  // it.todo('should get something');
})