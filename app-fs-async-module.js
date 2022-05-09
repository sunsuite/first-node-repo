const { readFile, writeFile } = require('fs'); // Importing the built in File System module (Async versions of these functions)

// First callback function begins
readFile('./content/first.txt', 'utf8', (error, result) => {
    
    // If our request for the first file fails for any reason we log the error and escape
    if(error) {
        console.log(error);
        return;
    }

    // Saving the data returned from the first file into a variable, so we can use it when we get around to writing the new file.
    const firstFileContent = result;

    readFile('./content/second.txt', 'utf8', (error, result) => {

        // If our request for the second file fails for any reason we log the error and escape
        if(error) {
            console.log(error);
            return;
        }

        // Saving the data returned from the second file into a variable, so we can use it when we get around to writing the new file.
        const secondFileContent = result;

        // At this stage all of the data from the first and second files have returned successfully. We can now construct the string we want to add to our new file, and then write the new file to disk. Note** writeFile is also a callback function, hence the arrow function (the third argument).
        writeFile('./content/result-async.txt',
        `Here is a file made up of a combination of the two existing files named first.txt and second.txt\n\n${firstFileContent} --- ${secondFileContent}\n\nThis content was created by Async callback functions. They waited for the data to arrive before attempting to write the file to disk.`,
        
        // If the file fails to write to disk the error is caught here.
        (error, result) => {
            if(error) {
                console.log(error);
                return;
            }

            // At this stage the new file has been created. We can use 'result' if we need to interact with the file at all. In this case we don't.
            console.log('The new file was created / updated successfully');
        });
    });
});