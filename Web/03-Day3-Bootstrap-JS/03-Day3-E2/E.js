var Key = {
    "6": "a",
    "1": "b",
    "7": "d",
    "4": "e",
    "3": "i",
    "2": "l",
    "9": "m",
    "8": "n",
    "0": "o",
    "5": "t"
}

const test = (num) => {

    if (num < 100 || num > 999999) {

        return "Invalid number, try agin"
    }
    let numberString = num.toString();
    console.log(numberString)
    let result = "";

    for (let numberChar of numberString) {
        result += Key[numberChar];
    }
    console.log(result)
    return result;
}

test(1233);
