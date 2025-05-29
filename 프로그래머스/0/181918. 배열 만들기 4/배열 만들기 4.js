function solution(arr) {
    const stack = [];
    let i = 0;

    while (i < arr.length) {
        const curr = arr[i];
        const last = stack[stack.length - 1];

        if (stack.length === 0 || last < curr) {
            stack.push(curr);
            i++;
        } else {
            stack.pop();
        }
    }

    return stack;
}
