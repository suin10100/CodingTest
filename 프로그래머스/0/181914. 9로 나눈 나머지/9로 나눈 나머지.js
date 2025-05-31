function solution(number) {
    return [...number].reduce((acc, val) => acc + +val, 0) % 9;
}