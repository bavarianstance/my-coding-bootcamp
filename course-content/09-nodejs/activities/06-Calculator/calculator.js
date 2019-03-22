let add = () => {
	console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
}

let subtract = () => {
	console.log(process.argv[3] - process.argv[4]);

}
subtract();

let multiply = () => {
	console.log(process.argv[3] * process.argv[4]);
}

let divide = () => {
	console.log(process.argv[3] / process.argv[4]);
}

console.log(process.argv[2]);