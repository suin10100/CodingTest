-- 코드를 입력하세요
/*
SELECT COUNT(AGE)
FROM USER_INFO
WHERE AGE >= 20 && AGE <= 29
AND DATE_FORMAT(JOINED, '%Y-%m-%d')>= '2021-01-01' && DATE_FORMAT(JOINED, '%Y-%m-%d')<= '2021-12-31'
*/

SELECT COUNT(AGE)
FROM USER_INFO
WHERE AGE BETWEEN 20 AND 29
AND JOINED LIKE '2021%'