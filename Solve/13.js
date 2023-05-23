var specialCase = function (first, second) {

    switch (true) {
        // I can be placed before V (5) and X (10) to make 4 and 9.
        case (first === 'I' && second === 'V'):
            value = 4;
            break;
        case (first === 'I' && second === 'X'):
            value = 9;
            break;

        // X can be placed before L (50) and C (100) to make 40 and 90. 
        case (first === 'X' && second === 'L'):
            value = 40;
            break;
        case (first === 'X' && second === 'C'):
            value = 90;
            break;

        // C can be placed before D (500) and M (1000) to make 400 and 900.
        case (first === 'C' && second === 'D'):
            value = 400;
            break;
        case (first === 'C' && second === 'M'):
            value = 900;
            break;

        default:
            value = -1;
            break;
    }

    return value;
}

var romanToInt = function (string) {
    let sum = 0;

    for (let i = 0; i < string.length; i++) {

        while (1) {
            const value = specialCase(string[i], string[i + 1])

            if (value > 0) {
                sum += value;
                i += 2;
            } else { break }
        }

        switch (string[i]) {
            case 'I':
                sum += 1
                break;
            case 'V':
                sum += 5
                break;
            case 'X':
                sum += 10
                break;
            case 'L':
                sum += 50
                break;
            case 'C':
                sum += 100
                break;
            case 'D':
                sum += 500
                break;
            case 'M':
                sum += 1000
                break;
            default:
                break;
        }
    }
    return sum
}

console.log(romanToInt("MCMXCIV"));