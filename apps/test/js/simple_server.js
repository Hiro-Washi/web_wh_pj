"use strict";

const port = 3000;
const http = require("http");
const server = http.createServer( (request, response) => {
  response.writeHead(200, {"Content-type": "text/html"});
  //                 status code, {header info}

  const responseMessage = "<h1>Hello Node.js!</h1>";
  response.write(responseMessage);
  response.end();
  console.log(`Sent a response : ${responseMessage}`);
} );