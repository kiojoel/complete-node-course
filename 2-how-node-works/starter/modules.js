const C = require('./test-module-1');

//module.exports
const calc1 = new C();
console.log(calc1.add(4, 3));

//exports
/* const calc2 = require('./test-module-2');
console.log(calc2.add(5, 4));
console.log(calc2.multiply(5, 4));
 */

const { add, multiply, divide } = require('./test-module-2');
console.log(add(5, 4));
console.log(multiply(5, 4));
console.log(divide(20, 4));

//caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
