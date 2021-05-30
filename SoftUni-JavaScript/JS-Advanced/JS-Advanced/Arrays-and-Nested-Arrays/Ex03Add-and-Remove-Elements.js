function addAndRemoveElements(command) {;
    const array = [];

    for (let index = 0; index < command.length; index++) {
        if (command[index].toLowerCase() === 'add') {
            array.push(index + 1);
        } else if (command[index].toLowerCase() === 'remove') {
            array.pop();
        }
    }

    if (array.length == 0) {
        console.log("Empty");
    } else {
        array.forEach(element => {
            console.log(element);
        });
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);