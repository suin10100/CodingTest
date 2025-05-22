function solution(n) {
    var answer = 0;
    const isOdd = n % 2 !== 0;
    const count = isOdd ? (n+1)/2 : n/2
    var current = n;
    for (let i=0; i<count; i++) {
        answer += isOdd ? current : current**2;
        current -= 2;
    }
    return answer;
}