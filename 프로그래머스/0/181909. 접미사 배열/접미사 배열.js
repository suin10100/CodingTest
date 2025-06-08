function solution(my_string) {
    var array = [];
    return [...my_string].map((_, i) => my_string.slice(i)).sort();
}