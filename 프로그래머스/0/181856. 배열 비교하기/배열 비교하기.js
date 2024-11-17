/*
function solution(arr1, arr2) {
  var answer = 0;

  if (arr1.length == arr2.length) {
    const sum_arr1 = arr1.reduce((a, b) => a + b, 0);
    const sum_arr2 = arr2.reduce((a, b) => a + b, 0);
    if (sum_arr1 > sum_arr2) {
      answer = 1;
    } else if (sum_arr1 < sum_arr2) {
      answer = 1;
    } else answer = 0;
  } else answer = arr1.length > arr2.length ? 1 : -1;

  return answer;
}

*/

function solution(arr1, arr2) {

    if(arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1; 
    } 

    const sum_arr1 = arr1.reduce((a, b) => a + b, 0);
    const sum_arr2 = arr2.reduce((a, b) => a + b, 0);
    if (sum_arr1 == sum_arr2) {
        return 0
    }
    else {
        return sum_arr1 > sum_arr2 ? 1 : -1
    }
}
