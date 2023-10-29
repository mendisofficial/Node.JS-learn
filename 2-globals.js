/**
 * Node.js Global Objects
 *
 * In Node.js, there are several objects that are available globally,
 * meaning you can access them from any module without having to import them explicitly.
 * These global objects provide essential functionality and information for your Node.js applications.

 * Some of the key global objects include:
 * - global: The global object itself, which contains global variables and functions.
 * - process: An object that provides information about the current Node.js process and allows you to control it.
 * - console: A global object for printing to the console, useful for debugging and logging.
 * - setTimeout and setInterval: Global functions for scheduling code execution after a specified delay or at regular intervals.
 * - __dirname and __filename: Variables that provide the directory name and filename of the current module.
 * - require: A function for including external modules in your code.
 *
 * While global objects can be handy,
 * it's a best practice to avoid polluting the global namespace and instead use modules to encapsulate your code.
 * You can use `module.exports` to export functionality from one module and `require` to import it in another.
 *
 * Example:
 *
 * // mymodule.js
 * const myVar = 42;
 * module.exports = myVar;
 *
 * // app.js
 * const myVar = require('./mymodule');
 * console.log(myVar); // Outputs 42
 * 
 *
 * Understanding when to use globals and when to encapsulate functionality within modules is essential for clean and maintainable Node.js code.
 */

console.log(__dirname);
setInterval(() => {
    console.log('hello world');
}, 1000);