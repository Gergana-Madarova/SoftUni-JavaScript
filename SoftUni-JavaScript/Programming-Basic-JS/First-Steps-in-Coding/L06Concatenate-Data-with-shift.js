function concatenateData(input) {
	let firstname = input.shift();
	let lastname = input.shift();
	let age = Number(input.shift());
	let town = input.shift();

	console.log(`You are ${firstname} ${lastname}, a ${age}-years old person from ${town}.`);
}

//входа се подава като масив
concatenateData(['Petar', 'Petrov', '24', 'Sofia']);