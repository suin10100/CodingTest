function solution(a, b) {
    var StrA = a.toString();
    var StrB = b.toString();
    var combine = Number(StrA + StrB);
    var multiple = 2 * a * b;
    var answer = 0;
    
    if( combine > multiple) {
        answer = combine;
    }
    else 
        answer = multiple;
    
    return answer;
}