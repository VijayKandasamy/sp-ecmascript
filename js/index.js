// import {name, z, x, a} from './module.js';
import * as mod from './module.js';
import {adder} from './functions.js';
import {DataSet} from './which-this-is-this.js';

// Placeholder JS file
console.log('Successful test.');

const localName = 'John Paxton';

console.log(`
localName: ${mod.localName}
imported name: ${mod.name}
x: ${mod.x}
z: ${mod.z}
a: ${mod.a}
`);
