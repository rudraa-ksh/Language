#include <stdio.h>
int main()
{
    int a,b;
    for(a=1;a<6;a++){
        for(b=1;b<a;b*a){
            printf("%d ",b);
        }
        printf("\n");
    }
    return 0;
}