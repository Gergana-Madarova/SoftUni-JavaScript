class Bank {
    constructor(bankName) {
        //should be set as private property of type string 
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let currCustomer = this.allCustomers.find(c => c.personalId === customer.personalId);

        if (currCustomer) {
            throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} is already our customer!`);
        }

        let customerObj = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            personalId: customer.personalId,
            totalMoney: 0,
            transaction: []
        }
        this.allCustomers.push(customerObj);

        return customer;
    }

    depositMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);
        let currCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if (!currCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        currCustomer.totalMoney += amount;
        currCustomer.transaction.push(['deposit', amount]);

        return `${currCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);
        let currCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if (!currCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (currCustomer.totalMoney < amount) {
            throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        currCustomer.totalMoney -= amount;
        currCustomer.transaction.push(['withdraw', amount]);

        return `${currCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        personalId = Number(personalId);
        let currCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if (!currCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${currCustomer.firstName} ${currCustomer.lastName}`);
        result.push(`Customer ID: ${personalId}`);
        result.push(`Total Money: ${currCustomer.totalMoney}$`);
        result.push('Transactions:');

        let count = currCustomer.transaction.length;
        let info = currCustomer.transaction
            .reverse()
            .map((transa, index) => {
                if (transa[0] === 'deposit') {
                    return `${count - index}. ${currCustomer.firstName} ${currCustomer.lastName} made deposit of ${transa[1]}$!`;
                }
                return `${count - index}. ${currCustomer.firstName} ${currCustomer.lastName} withdrew ${transa[1]}$!`;
            })
            .join('\n');

        result.push(info);
        return result.join('\n');
    }
};



let bank = new Bank('SoftUni Bank');
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));