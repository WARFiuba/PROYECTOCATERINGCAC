const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const rootDir = process.cwd();
    const pathFile = path.join(rootDir, "frontend", "index.html");

    const html = fs.readFileSync(pathFile);

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>hola node.js</h1><p>lorem</p>");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
