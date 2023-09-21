/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const dictionary = new Map();
    let decodeMessage = ''
    let count = 0;

    for(let i = 0; i<key.length; i++){
        if((key[i]>='a' && key[i]<='z') && !dictionary.has(key[i])){
            dictionary.set(key[i], alphabet[count])
            count++;
        }
    }

    for (let i=0; i<message.length; i++){
        decodeMessage += (message[i]>='a' && message[i]<='z')? dictionary.get(message[i]):' '
    }

    return decodeMessage
};

console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'));