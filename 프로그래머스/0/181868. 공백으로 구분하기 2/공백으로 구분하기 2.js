function solution(my_string) {
    var answer = my_string.trim().split(' ');
    return answer.filter( a => a !== '');
}