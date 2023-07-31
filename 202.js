/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let flag = false

    if(n<0){
        return flag
    }    

    const arr = new Map();

    while(1){
        let sum = 0;

        while (n>0){
            digit = n%10
            sum+=Math.pow(digit,2)
            n = Math.floor(n/10)
        }

        if(sum==1){
            flag = true
            break;
        }else if(arr.has(sum)){
            break
        }else{
            n = sum;
            arr.set(n,true)
        }
    }
    return flag 
};

console.log(isHappy(19))