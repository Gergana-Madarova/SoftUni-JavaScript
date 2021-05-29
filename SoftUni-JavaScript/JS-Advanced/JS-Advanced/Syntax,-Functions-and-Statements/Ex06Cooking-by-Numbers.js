function cookingByNumbers(arg1, arg2, arg3, arg4, arg5, arg6) {
    let num = Number(arg1);
    let array = [arg2, arg3, arg4, arg5, arg6];

    for (let index = 0; index < 5; index++) {
        switch (array[index]) {
            case "chop":
                num = num / 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num += 1;
                break;
            case "bake":
                num *= 3;
                break;
            case "fillet":
                num = num - (0.2 * num);
                break;
        }

        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');