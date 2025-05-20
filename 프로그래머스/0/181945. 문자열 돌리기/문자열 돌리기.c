#include <stdio.h>
#define LEN_INPUT 11

int main(void) {
    char s1[10];//100까지 입력 가능
    scanf("%10s", s1);// str 입력
    for(int i=0; s1[i] != '\0'; i++) {
        printf("%c\n", s1[i]);
    }
    return 0;
}
