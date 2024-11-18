function solution(n, k) {
    if ( n >= 10) {
        var vonus = parseInt(n / 10);
        return n * 12000 + (k - vonus) * 2000 ;
    }
    else 
        return n * 12000 + k * 2000;
}