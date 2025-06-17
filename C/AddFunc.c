#include <stdio.h>
int add_num(int a,int b);

int main()
{
    int x=50,y=80,z;
    z=add_num(x,y);
    printf("%d",z);
    return 0;
}

int add_num(int a,int b)
{
    int c;
    c=a+b;
    return c;
}