/*
function solution(rny_string) {
    var arr = rny_string.slice(0, rny_string.length)
    var ansArr = [];
    for(let i = 0; i < arr.length; i++) {
        ansArr[i] = arr[i] == 'm'? 'rn' : arr[i]
        }
    return ansArr.join("");
}
*/
function solution(rny_string) {
    return rny_string.replaceAll('m', 'rn');
}