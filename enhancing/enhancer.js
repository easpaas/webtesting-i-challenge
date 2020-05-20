module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {
  name: 'gamerdude',
  enhancement: 1 ,
  durability: 50
};

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { 
    ...item,
    durability: 100
   };
}

function get(item) {
  return { ...item };
}