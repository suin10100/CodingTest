function solution(num, total) {
    var first = (total * 2 / num - (num -1)) / 2
    const answer = [];
    for (let i  = 0; i < num; i++) {
        answer [i] = first;
        first++;
    }
    return answer
}