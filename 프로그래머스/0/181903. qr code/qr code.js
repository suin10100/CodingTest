function solution(q, r, code) {
    return [...code].reduce((cur, val, idx) => { 
        return idx % q === r ? cur + val : cur;
    },"");
    
}