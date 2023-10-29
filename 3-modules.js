/**
 * Node.js Modules and Module Exports - A Comprehensive Example
 *
 * In this example, we explore Node.js modules, module exports, and their usage.
 * Node.js treats every file as a module by default, and it provides a powerful mechanism for encapsulating and sharing code efficiently.

 * **modules.js**:
 * - This is the main application file.
 * - It demonstrates how to use the `require` function to import external modules and use their exports.
 * - It imports the `names` object from '4-first_module.js', the `sayHi` function from '5-second_module.js', and the `data` object from '6-more_ways_to_export.js'.
 * - It also imports and executes code from '7-mind_blow.js'.
 * - The imported modules and code are used to greet individuals with "Hello there" and perform various tasks.
 *
 * **first_module.js**:
 * - This module defines both local and shareable variables.
 * - It exports an object containing the variables `john` and `peter` for use in other modules.
 *
 * **second_module.js**:
 * - This module exports a function `sayHi` that logs a greeting message to the console.
 *
 * **more_ways_to_export.js**:
 * - This module exports an object with two properties: `items` and `singlePerson`.
 * - It demonstrates multiple ways to export data in a module.
 *
 * **mind_blow.js**:
 * - This module defines variables and a function `addValues`.
 * - It logs the sum of `num1` and `num2` when the module is imported and executed in 'modules.js'.
 *
 * The provided code illustrates the modularity of Node.js, allowing you to break your application into smaller, reusable pieces.
 * You can encapsulate data, functions, and even execute code within modules, making your codebase clean, organized, and maintainable.

 * **Example of using the modules**:
 * // In modules.js
 * const names = require('./4-first_module');
 * const sayHi = require('./5-second_module');
 * const data = require('./6-more_ways_to_export');
 * require('./7-mind_blow');
 *
 * sayHi('susan'); // Outputs: "Hello there susan"
 * sayHi(names.john); // Outputs: "Hello there john"
 * sayHi(names.peter); // Outputs: "Hello there peter"
 *
 * console.log(data.items); // Outputs: ["item1", "item2"]
 * console.log(data.singlePerson); // Outputs: { name: 'bob' }
 * ```
 *
 * This example demonstrates how Node.js modules and exports allow you to structure your application code, maintain separation of concerns, and reuse code effectively.
 */

const names = require('./4-first_module');
const sayHi = require('./5-second_module');
const data = require('./6-more_ways_to_export');

require('./7-mind_blow');

//console.log(names);
//console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);