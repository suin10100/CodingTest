function solution(a, b, c) {
    var eq1 = a + b + c;
    var eq2 = (a + b + c) * (a**2 + b**2 + c**2 );
    var eq3 = (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 );
    var answer = (a === b && b === c) * eq3 || (a !== b && b !== c && a !== c) * eq1 || eq2 ;
    
    return answer;
}