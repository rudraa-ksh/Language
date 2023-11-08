#include <stdio.h>
int main()
{
    float pi=3.14,radius,area;
    printf("ENter the raduis of the circle: ");
    scanf("%f",&radius);
    area=pi*radius*radius;
    printf("Area: %f",area);
    return 0;
}