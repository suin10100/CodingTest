function solution(my_string, queries) {
    let arr = [...my_string];
    queries.forEach(([s, e]) => {
        let subarr = arr.slice(s, e+1).reverse();
        for(let i = s; i <= e; i++) {
            arr[i] = subarr [i -s];
        }
    });
    return arr.join('');
}