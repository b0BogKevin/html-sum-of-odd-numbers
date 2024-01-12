function sumOfOdd(array) {
    let sum = 0
    
    
        for (let i = 0; i < array.length; i++) {
            if (!Number.isInteger(array[i])) {
                return "undefined"
            }
            if (Math.pow(array[i],3)%2 == 1) {
                sum += Math.pow(array[i],3);
            }
        }
    return sum
    
    
}

var test1 = [3,3,4,6,3,7,3]
var test2 = ["dgdfg ","sasd"]
console.log(sumOfOdd(test1))
console.log(sumOfOdd(test2))

