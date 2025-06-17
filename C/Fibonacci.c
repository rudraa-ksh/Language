#include <stdio.h>
int main()
{
    int a=0,b=1,c=0,limit;
    printf("Enter the limit to print fibonacci number: ");
    scanf("%d",&limit);
    printf("First %d fibonacci number are: ",limit);
    printf("%d ",a);
    for(int i=0;i<limit-1;i++){
        c=a+b;
        a=b;
        b=c;
        printf("%d ",a);
    }
    return 0;
}