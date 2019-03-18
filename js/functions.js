console.log('Reducer test: ', reducer(0, 5));

// Uncomment to break
// console.log('Assigned reducer test: ', assignedReducer(0, 5));

function reducer(total, current) {
  const newCurrent = isNaN(Number(current)) ? 0 : Number(current);
  return total + newCurrent;
}

const assignedReducer = function (total, current) {
  const newCurrent = isNaN(Number(current)) ? 0 : Number(current);
  return total + newCurrent;
};

const arrowReducer = (total, current) => {
  const newCurrent = isNaN(Number(current)) ? 0 : Number(current);
  return total + newCurrent;
}

const ar2 = (total, current) => total + isNaN(Number(current)) ? 0 : Number(current);

export function adder(x = 0, y = 0, ...z) {
  return x + y + z.reduce(reducer, 0);
}

export function betterAdder(...args) {
  return args.reduce(reducer, 0);
}

export function oldAdder() {
  let total = 0;
  for (let x = 0; x < arguments.length; x++) {
    total += arguments[x];
  }

  return total;
}

console.log('adder(2): ', adder(2, 3, '8', 'John'));
