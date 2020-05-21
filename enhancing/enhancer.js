module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {
  name: 'gamerdude',
  enhancement: 1,
  durability: 50
};


function succeed(item) {
  // - If the item enhancement level is 20, the enhancement level is not changed.
  // - The durability of the item is not changed.
  item.enhancement += 1;

  return {...item};
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