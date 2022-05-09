const { readFileSync, writeFileSync } = require('fs'); // Importing the built in File System module


// Below we are reading from two different files and then printing out the content of files to the terminal
const firstFile = readFileSync('./content/first.txt', 'utf8');
const secondFile = readFileSync('./content/second.txt', 'utf8');

console.log(`${firstFile} --- ${secondFile}`);

// Below we are creating a new file and using the values we pulled out the files above to populate it

writeFileSync(
    './content/result-sync.txt',
    `Here is a file made up of a combination of the two existing files named first.txt and second.txt\n\n${firstFile} --- ${secondFile}`
);

// NOTE** WriteFileSync will create a file if one doesn't already exist, but if it does exist that file will be overridden.
// In the below we are creating a seperate file called result-sync-append.txt. We have included the flag 'a' which indicates to node that we don't want to just override the file every time the script is run; we want to append the content onto the existing content already present in the file.

writeFileSync(
    './content/result-sync-append.txt',
    `Here is a file made up of a combination of the two existing files named first.txt and second.txt\n\n${firstFile} --- ${secondFile}`, 
    {flag: 'a'} // Adding the flag as an extra argument
);
