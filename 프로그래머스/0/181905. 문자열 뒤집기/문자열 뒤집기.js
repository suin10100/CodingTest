function solution(my_string, s, e) {
    const reversePart = [...my_string.slice(s, e + 1)].reverse().join('');
    return my_string.slice(0, s) + reversePart + my_string.slice(e+1);
}