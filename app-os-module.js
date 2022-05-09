const os = require('os'); // Importing the built in OS module

// Information about the current user
const user = os.userInfo();

console.log(user);


// This method returns the system uptime in seconds (How long the system has been running)
const systemUptime = os.uptime();

console.log(`The system has been running for ${systemUptime} seconds.`);

// A good way of collecting information about the system is to create an object and create properties for the information you need. You can then make use of the OS modules methods to find the information you are looking for, as we've done below
const curretOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(curretOS);
