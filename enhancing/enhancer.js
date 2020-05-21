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
  item.enhancement === 20 ?
    {...item}
  :
    item.enhancement += 1;
    return {...item}
}

function fail(item) {
  switch(item.enhancement) {
    case item.enhancement < 15:
      item.durability -= 5;
      break;
    case item.enhancement >= 15:
      item.durability -= 10;
      break;
    case item.enhancement > 16:
      item.enhancement -= 1;
      break;
    default:
      return { ...item };
  }
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