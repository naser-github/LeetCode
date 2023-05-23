var isPalindrome = function (x) {

    if(x<0) return false

    let num = x;
    let reverse = 0;

    while(num!=0){
        reverse = reverse*10+num%10
        num=Math.floor(num/10);
    }

    return x===reverse? true: false
    
};

console.log(isPalindrome(100));