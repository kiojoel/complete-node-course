const fs = require("fs");
const http = require("http");
const url = require("url");

////////////////////////////////////////
// FILES

//Blocking, synchronous way
/* const inputText = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inputText);

const outputText = `This is what we know about avocado: ${inputText}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", outputText);
console.log("Done!"); */

//Non-blocking, asynchronous way
/* fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written!");
      });
    });
  });
});

console.log("read file");
 */

////////////////////////////////////////
// SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/") {
    res.end("This is the HOME page");
  } else if (pathName === "/overview") {
    res.end("This is the OVERVIEW page");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT page");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>OOPS! page not found</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to server on port 3000");
});
