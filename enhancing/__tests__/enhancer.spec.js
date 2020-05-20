const {succeed, fail, repair, get} = require('../enhancer.js');

// test away!
describe("enhancer", () => {
  it('should repair something', () => {
    const item = {foo: 'bar'};
    const repairedItem = {...item};
    expect(repair(item)).toEqual(repairedItem);
  });

  // it.todo('should succeed');
  // it.todo('should fail');
  // it.todo('should get something');
})