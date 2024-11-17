function solution(num_str) {
    
    var answer = 0;
    
    var join = [...num_str].join("");
    for (let i = 0; i < join.length; i++) {
        answer += Number(join[i]);   
    }
    return answer;
}