const http = require("http");
const fs = require("fs");

const PORT = 8080;

let handleRequest = (req, res) => {
	let path = req.url

	switch(path){
		case "/thanks":
		  return renderThankYouPage(req, res);
		default: 
		  return renderWelcomePage(req, res);
	}
}

let server = http.createServer(handleRequest);

let renderWelcomePage = (req, res) => {
	fs.readFile(__dirname + "/index.html", (err, data) => {
		if (err) {
			res.writeHead(500, { "Content-Type": "text/html"});
			res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
		}
		else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		}
	});
}

let renderThankYouPage = (req, res) => {
	let requestData = "";

	let myHTML = "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</h1></body></html>";

	req.on("data", (data) => {
		requestData += data;
        console.log("You just posted some data to the server:\n", requestData);

      myHTML =
      "<html><head><title>Hello Noder!</title></head><body>" +
      "<h1>All your data are belong to me: </h1><code>" +
      requestData +
      "</code>" +
      "</body></html>";
	});

	req.on("end", () => {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(myHTML);
	});
}

server.listen(PORT, () => {
	console.log("Server listening on: http://localhost:" + PORT);
})