
Homecoding problemsHackerRank Day 3: Arrays 10 days of javascript solution
HackerRank Day 3: Arrays 10 days of javascript solution
YASH PAL February 07, 2021

In this HackerRank Day 3: Arrays 10 days of javascript problem Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.
HackerRank Day 3: Arrays 10 days of javascript solution


HackerRank Day 3: Arrays 10 days of javascript problem solution.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
   let first = nums[0]; 
   let second = -1;
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
        second = first;
        first = nums[i]
    }

    if (nums[i] > second && nums[i] < first) {
        second = nums[i];
    }
}


return second;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}