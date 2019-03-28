const http = require("http");
const fs = require("fs");

const PORT = 8080;

let handleRequest = (req, res) => {
	let path = req.url;

	switch(path) {
		case "/food":
		case "/movies":
		case "/frameworks":
		  return renderHTML(path + ".html", res);

		default: 
		  return renderHTML("/index.html", res);
	}
}

let server = http.createServer(handleRequest);

let renderHTML = (filePath, res) => {
	return fs.readFile(__dirname + filePath, (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(data);
	});
}

server.listen(PORT, () => {
	console.log("Server is listening on PORT: " + PORT);
});