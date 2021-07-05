class Parking {
    constructor(capacity, vehicles) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        //If there's not enough parking spots for the car the park
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Not enough parking space.");
        }

        // add the car, with the properties: carModel, carNumber, payed: default false, to the vehicles array
        let car = {
            carModel,
            carNumber,
            payed: false
        };
        this.vehicles.push(car);

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let currCar = this.vehicles.find(x => x.carNumber == carNumber);

        //If the car is not found
        if (!currCar) {
            throw new Error("The car, you're looking for, is not found.");
        }

        //If the car hasn't payed
        if (!currCar.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        //should remove the car from the vehicles array
        this.vehicles = this.vehicles.filter(x => x !== currCar);

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let currCar = this.vehicles.find(x => x.carNumber == carNumber);

        //If the car is not found
        if (!currCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        //the car has already payed
        if (currCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        //set payed to true on the found car
        currCar.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        let currCar = this.vehicles.find(x => x.carNumber == carNumber);
        let output = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`;

        if (carNumber) {
            return `${currCar.carModel} == ${currCar.carNumber} - ${currCar.payed == true ? 'Has payed' : 'Not payed'}`;
        } else {
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(currobj => {
                    let isPayed;
                    currobj.payed ? isPayed = `Has payed` : isPayed = "Not payed";
                    output += `${currobj.carModel} == ${currobj.carNumber} - ${isPayed}` + '\n';
                });
        }

        return output.trim();
    }
};


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));