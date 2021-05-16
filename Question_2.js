const number = [1, 1, 0, 1, 0, 1, 1, 1, 0, 0];
    const maxConsecutive = (number=[]) =>{
    let largestCount = 0;
    let currentCount = 0;
    for (let i = 0; i<number.length; i++) {
        if (number[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largestCount) largestCount = currentCount;
    };
    return largestCount;
};
console.log(maxConsecutive(number));