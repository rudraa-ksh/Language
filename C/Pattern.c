#include <stdio.h>
int main()
/*{
    printf("1 \n");
    printf("2 4 \n");
    printf("1 3 5 \n");
    printf("2 4 6 8 \n");
    printf("1 3 5 7 9 \n");
    return 0;
    }*/

{
    int a,b,k=1;
    for(a=1;a<6;a++){
        for(b=1;b<a;b++){
            printf("%d ",k);
            k=k+1;
        }
        printf("\n");
    }
    return 0;
}