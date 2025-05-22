function solution(a, b) {
    var answer = 0;
    var ab = parseInt(String(a) + String(b));
    var ba = parseInt(String(b) + String(a));
    if(ab >= ba) {
        answer = ab;
    }
    else if (ab < ba) {
        answer = ba;
    }
    // else (ab == ba) 
    //     answer = ab;
    return answer;
}