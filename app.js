const http = require('http');

const server = http.createServer((request, response) => {
    // request is the incoming request for information
    // response is what we are sending back

    console.log(request); // Let's find out some details about the request that has been made

    if(request.url === "/" ) {
        response.write('Welcome to our homepage');
        response.end(); // Ends the response
    } 
    else if (request.url === "/about") {
        response.write('Welcome to our about page');
        response.end(); // Ends the response
    }
    else {
         // A catch all - this will only run when the above conditions aren't true
        response.write('<h1>Nothing was found on the server</h1><p>We can\'t find the page you were looking for. <a href="/">Click here</a> return to the homepage.</p>');
        response.end(); // Ends the response
    }
})

server.listen(5000); // Navigate to http://localhost:5000/ to see the above response