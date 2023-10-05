function lowerCaseWords(mixedArray){
    return new Promise((resolve,reject) =>{
        if(!Array.isArray(mixedArray)){
            return reject("Input must be an array");
        }
        const words = mixedArray.filter
        (item =>typeof item ==="string").map
        (word =>word.toLowerCase());

        if(words.length === 0){
            reject("No Strings In Array")
        }else{
            resolve(words);
        }
    });
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray).then(output => console.log(output)).catch(error => console.error(error));