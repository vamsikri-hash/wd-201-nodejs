function hello() {
  console.log("Hello Node.Js! Trying it for the first time");
}

hello();

const fs = require("fs");

fs.writeFile("sample.txt", "Hello, Welcome to Node !", function (err) {
  if (err) throw err;
  console.log("File created !");
});

fs.appendFile("sample.txt", " Updated Content !", function (err) {
  if (err) throw err;
  console.log("File Updated !");
});

fs.rename("sample.txt", "test.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed !");
});

/* fs.unlink("test.txt", function (err) {
  if (err) throw err;
  console.log("File Deleted !");
}); */
