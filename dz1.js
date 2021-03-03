function print(number) {
    // if (Number.isInteger(number)) {
        let item = 1
        while (item <= number) {
            switch (item) {
                case 5:
                    console.log("пять");
                    break;
                case 13:
                    console.log("тринадцать");
                    break;
                case 22:
                    console.log("двадцать два");
                    break;
                case 35:
                    console.log("тридцать пять");
                    break;
                case 98:
                    console.log("девяносто восемь");
                    break;
                default:
                    console.log(item);
                    break;
            }
            item++
        }
    // } else
    //     console.log("This is not integer");
}
// print(100)