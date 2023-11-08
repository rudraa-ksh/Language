#include <stdio.h>
int main()
{
    int x,y,z;
    printf("The x: ");
    scanf("%d",&x);
    printf("The y: ");
    scanf("%d",&y);
    printf("The z: ");
    scanf("%d",&z);
    if (x>y){
        if (x>z){
            if (y>z){
                printf("y is the 2nd largest numner");
            }else{
                printf("z is the 2nd largest number");
            }
        }
    }
    if (y>x){
        if (y>z){
            if (x>z){
                printf("x is the 2nd largest numner");
            }else{
                printf("z is the 2nd largest number");
            }
        }
    }      
    if (z>y){
        if(z>x){
            if (y>x){
                printf("y is the 2nd largest numner");
            }else{
                printf("x is the 2nd largest number");
            }
        }
    }
    return 0;
}