const names = require('./modules-names'); // Grabbing the names from a separate file and making them available inside of this file
const sayHi = require('./modules-function'); // Grabbing a function from a separate file that will accept the names as an argument and print them out with a preset message

sayHi(names.susan);
sayHi(names.john);
sayHi(names.peter);

