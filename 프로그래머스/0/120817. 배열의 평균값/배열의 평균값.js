/*
    reduce(function 함수이름 (value1, value2) {
        retunm value1, value2;
    })
*/

function solution(numbers) {
    const sumResult = numbers.reduce(function add(sum, currentValue) {
        return sum + currentValue;
    });
    const len = numbers.length;
    var answer = sumResult / len;
    return answer;
}