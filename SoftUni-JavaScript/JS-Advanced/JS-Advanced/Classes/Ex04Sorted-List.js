class List {
    constructor(list = []) {
        //keeps a list of numbers, sorted in ascending order
        this.list = list.sort((a, b) => a - b);
        //size is not a function
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error(`Index doesn't exist`);
        } else {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error(`Index doesn't exist`);
        } else {
            return this.list[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

