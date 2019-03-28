const http = require("http");

const PORTONE = 7000;
const PORTTWO = 7500;

let randomIndex = Math.floor(Math.random() * 10)
let steveJobsQuotes = ["I want to put a ding in the universe.", "Design is not just what it looks like and feels like. Design is how it works.", "Innovation distinguishes between a leader and a follower.", "Sometimes life is going to hit you in the head with a brick. Don't lose faith.", "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.", "We hire people who want to make the best things in the world.", "Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me.", "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.", "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations."]
let alanTuringQuotes = ["We can only see a short distance ahead, but we can see plenty there that needs to be done.", "I propose to consider the question, 'Can machines think?", "Science is a differential equation. Religion is a boundary condition.", "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.", "Machines take me by surprise with great frequency.", "Mathematical reasoning may be regarded...", "We are not interested in the fact that the brain has the consistency of cold porridge.", "Those who can imagine anything, can create the impossible", "If a machine is expected to be infallible, it cannot also be intelligent."]

handleRequestOne = (request, response) => {
	response.end(steveJobsQuotes[randomIndex])
}

handleRequestTwo = (request, response) => {
	response.end(alanTuringQuotes[randomIndex])
}

const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, () => {
	console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, () => {
	console.log("Server listening on: http://localhost:" + PORTTWO);

});