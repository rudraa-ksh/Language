#include <stdio.h>
int main()
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