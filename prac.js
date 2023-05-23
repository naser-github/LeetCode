var isValid = function(s) {
    let flag = true
    let priorityQueue = [];

    if(s.length%2!=0) return false

    for ( let i=0;i<s.length;i++){
        switch(s[i]){
            case '(' :
            case '{' : 
            case '[' : 
                priorityQueue.push(s[i])
                break;
            case ')' : 
                priorityQueue[priorityQueue.length-1] =='('? priorityQueue.pop(): flag = false;
                break;
            case '}' : 
                priorityQueue[priorityQueue.length-1] =='{'? priorityQueue.pop(): flag = false
                break;
            case ']' : 
                priorityQueue[priorityQueue.length-1] =='['? priorityQueue.pop(): flag = false;
                break;
            default:
                break;
        }
        if(!flag) break;
    }

    return priorityQueue.length == 0? flag:false;    
};

console.log(isValid("(("))