function tickets(array, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsArr = [];
    for (let i = 0; i < array.length; i++) {
        let [destination, price, status] = array[i].split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        ticketsArr.push(ticket);
    }

    switchCase = {
        ["destination"]: () => { ticketsArr.sort((a, b) => a.destination.localeCompare(b.destination)); },
        ["status"]: () => { ticketsArr.sort((a, b) => a.status.localeCompare(b.status)); },
        ["price"]: () => { ticketsArr.sort((a, b) => a.price - b.price); }
    };
    switchCase[sortingCriterion]();

    return ticketsArr;
}

console.log(tickets(['Philadelphia|194.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));