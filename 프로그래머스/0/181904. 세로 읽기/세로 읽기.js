function solution(my_string, m, c) {
    const rows = my_string.match(new RegExp(`.{1,${m}}`, 'g'));
    return rows.map(row => row[c - 1]).join('');
}