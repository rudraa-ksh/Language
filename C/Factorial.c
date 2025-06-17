#include <stdio.h>
int fact_num(int a)
{
    int sum=1;
    for (int i=1;i<=a;i++){
        sum*=i;
    }
    return sum;
}

int main()
{
    int x=6,z;
    z=fact_num(x);
    printf("Factorial of %d is: %d",x,z);
    return 0;
}