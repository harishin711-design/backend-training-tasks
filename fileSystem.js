const fs = require("fs");

// Create and write file
fs.writeFile("sample.txt", "Hello from Node.js File System Module!", (err) => {
  if (err) {
    console.log("Error writing file:", err);
    return;
  }

  console.log("File created and data written successfully.");

  // Read file
  fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }

    console.log("File content:");
    console.log(data);
  });
});