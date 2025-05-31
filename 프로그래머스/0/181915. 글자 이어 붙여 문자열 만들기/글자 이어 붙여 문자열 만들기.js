function solution(my_string, index_list) {
    return index_list.reduce((acc, val) => acc + my_string[val], "");
}