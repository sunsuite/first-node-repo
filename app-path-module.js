const path = require('path'); // Importing the built in Path module

// The below property tells us what separator delimiter the system uses - as this can change depending on where the application is running

const pathSeperator = path.sep; 

console.log(pathSeperator);

// The join method creates safe paths for us, depending on where our application is running 

const filePath = path.join('/content/', 'subfolder', 'test.txt');

console.log(filePath);

// The basename method returns only the file name on the end of a path

const fileName = path.basename(filePath);

console.log(fileName);

// The resolve method provides us with an absolute path the global __dirname provides us the path above our app folder - but we need to provide everything inside of our app folder as extra arguments

const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolutePath);