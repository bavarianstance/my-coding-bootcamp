console.log (process.argv[2]);
console.log(process.argv[3]);

let equals = () =>  {
if (process.argv[2] === process.argv[3]) {
	console.log("true");
} else {
	console.log("false");
};
};

equals();
