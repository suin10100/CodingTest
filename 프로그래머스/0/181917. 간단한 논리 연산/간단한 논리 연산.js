function solution(x1, x2, x3, x4) {
    var comp1 = x1 || x2 ? true : false;
    var comp2 = x3 || x4 ? true : false;
    return comp1 && comp2 ? true : false;
}