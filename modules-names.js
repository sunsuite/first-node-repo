// This data is only available locally (in this file) because it hasn't been added to the exports object
const secret = "Super Secret";

// This data has been made available to the rest of our application because we've added it to the exports object
const susan = 'Susan';
const john = "John";
const peter = "Peter";

// Here we add the data we want to share to the rest of our application
module.exports = {susan, john, peter};