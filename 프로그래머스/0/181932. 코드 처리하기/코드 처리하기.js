function solution(code) {
    let mode = 0;
    let ret = "";
    let count = 0;
    for (let i = 0; i<code.length; i++) {
        if( code[i] === "1") {
            mode = mode === 0 ? 1 : 0;
            continue;
        }
       if (mode === 0) {
            if (count % 2 === 0) {
                ret += code[i];
            }
            count++;
        } else {
            if (count % 2 === 0) {
                ret += code[i];
            }
            count++;
        }
    }
    return ret === "" ? "EMPTY": ret;
}