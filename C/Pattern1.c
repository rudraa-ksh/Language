#include <stdio.h>
int main()
{
    int a,b;
    for(a=1;a<7;a++){
        for(b=1;b<a;b++){
            printf("%d ",a-1);
        }
        printf("\n");
    }
    return 0;
}