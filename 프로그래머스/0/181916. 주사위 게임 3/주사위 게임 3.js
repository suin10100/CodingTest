function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const count = {};

    for (const num of dice) {
        count[num] = (count[num] || 0) + 1;
    }
    
    const entries = Object.entries(count).map(([key, val]) => [Number(key), val]);
    entries.sort((a, b) => b[1] - a[1]);

    const [p, pCount] = entries[0];

    if (entries.length === 1) {
        return 1111 * p;
    } 
    else if (entries.length === 2) {
        const [q, qCount] = entries[1];
        if (pCount === 3) {
            return Math.pow(10 * p + q, 2);
        } 
        else {
            return (p + q) * Math.abs(p - q);
        }
    } 
    else if (entries.length === 3) {
        const q = entries[1][0];
        const r = entries[2][0];
        return q * r;
    } 
    else {
        return Math.min(...dice);
    }
}
