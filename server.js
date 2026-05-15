const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {
  // Send response
  res.write("Hello from Node.js HTTP Server!");

  // End response
  res.end();
});

// Start server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});