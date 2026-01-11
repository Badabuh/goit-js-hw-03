function filterArray(numbers, value) {
    if (!Array.isArray(numbers) || numbers.length === 0 || typeof value !== 'number') {
        return [];
    }else{
        const filteredNumbers = [];
        for (const number of numbers) {
            if(typeof number === 'number'){
                if (number > value) {
                filteredNumbers.push(number);
            }
            }else{
                return [];
            }
        }
        return filteredNumbers;
    }
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
