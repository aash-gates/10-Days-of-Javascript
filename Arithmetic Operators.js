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
*   Calculate the area of a rectangle.
*
*   @param {Number} length The length of a rectangle.
*   @param {Number} width The width of a rectangle.
*   @return {Number} The area of a rectangle.
**/
function getArea(length, width) {
    var area = length * width;
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*
*   @param {Number} length The length of a rectangle.
*   @param {Number} width The width of a rectangle.
*   @return {Number} The perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    var perimeter = length * 2 + width * 2;
    
    return perimeter;
}

function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}