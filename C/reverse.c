#include <stdio.h>
int main()
{
    int a,b,c, d;
    scanf("%d",&a);
    b=a%10;
    a=a/10;
    c=a%10;
    a=a/10;
    d=a%10;
    a=a/10;
    printf("%d %d %d %d",b,c,d,a);
    return 0;
}