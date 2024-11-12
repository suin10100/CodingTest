function solution(my_string) {

    var answer = '';
    const arr = [];

    for (let i = 0; i < my_string.length; i++) {
        arr[i] = my_string.slice(i, i + 1);
    }
    
    for (let j = my_string.length-1 ; j >= 0; j--) {
            answer += arr[j];
            
    }
    return answer;
    return answer;
}