class ChristmasDinner {
    //properties on constructor
    constructor(budget) {
        this.budget = Number(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    //Use accessors to validate that the budget and throw an error
    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }

        this._budget = value;
    }

    shopping(productsInfoArr) {
        let [product, price] = productsInfoArr;

        if (this._budget < price) {
            throw new Error("Not enough money to buy this product");
        }

        this.products.push(product);
        this._budget -= price;

        return `You have successfully bought ${product}!`;
    }

    //input in format: { recipeName: string, productsList: array of strings }
    recipes(recipe) {
        //If all the products from the productList are present in the products array
        if (recipe.productsList.every(p => this.products.includes(p))) {
            this.dishes.push(recipe);

            return `${recipe.recipeName} has been successfully cooked!`;
        }

        //If one or more products needed to make the meal are absent from the products
        throw new Error("We do not have this product");
    }

    inviteGuests(guestName, dish) {
        if (!this.dishes.some(d => d.recipeName === dish)) {
            throw new Error("We do not have this dish");
        }
        if (Object.keys(this.guests).includes(guestName)) {
            throw new Error("This guest has already been invited");
        }

        this.guests[guestName] = dish;

        return `You have successfully invited ${guestName}!`;
    }

    //all the guest, the dish they are having and the products the dish is made of, separated by a comma and space (product, product)
    showAttendance() {
        let result = '';
        Object.entries(this.guests).forEach(([name, dish]) => {
            const dishObj = this.dishes.find(d => d.recipeName === dish);
            const productsForDishes = dishObj.productsList.join(', ');

            result += `${name} will eat ${dish}, which consists of ${productsForDishes}\n`;
        })

        return result.trimEnd();
    }
};


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());