/*map() 배열 내 모든 요소 각각에 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
filter() 주어진 배열의 일부에 얕은 복사본 생성, 주어진 조건에 통과한 요소만 필터링
trim() 주어진 문자열의 양끝 공백을 제거, 원본 문자열은 삭제 x, 새로운 문자열 반환
*/

function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    var answer = 0;
    
    //str에 for문의 함수를 호출하여 새로운 배열 반환
    //for문은 아기가 발음할 수 있는 발음이 포함이 되는지를 판별한다.
    return babbling.map((str) => {
        for (const w of word) {
            if(str.includes(w)) { //  w의 값이 포함되는 지 판단
                str = str.replace(w, ' '); 
                // 결과 값으로 나올 배열의 값을 공백으로 설정
            }
        }
        return str; // [ '  ', 'uuu ', ' ', '   ', ' a' ]
    }).filter((str) => !str.trim()).length;
    // 결과값으로 나온 str 배열에 filter() 적용
    //!str.trim()는 boolean 타입 반환
    // str에 공백을 없앨 수 있는 배열을 필터링을 이용해 복사
    //length 함수를 이용해 공백이 있는 배열만 카운트
    // 공백외의 요소가 있다는건 일치하지 발음하지 못하는 발음이 섞여있다는 뜻
}