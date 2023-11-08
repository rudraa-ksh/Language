#include <stdio.h>

int main(){
    int a,b,c,d,h1,h2,h3;
    printf("Enter 1st number : ");
    scanf("%d",&a);
    printf("Enter 2nd number : ");
    scanf("%d",&b);
    printf("Enter 3rd number : ");
    scanf("%d",&c);
    printf("Enter 4th number : ");
    scanf("%d",&d);
    h1=a;
    if (b>h1){
        h2=h1;
        h1=b;
    }else if (b<h1){
        h2=b;
    }if (c>h1){
        h3=h2;
        h2=h1;
        h1=c;
    }else if (c<h1){
        if (c>h2){
            h3=h2;
            h2=c;
        }else if (c<h2){
            h3=c;
        }
    }if (d>h1){
        h3=h2;
        h2=h1;
        h1=d;
    }else if (d<h1){
        if (d>h2){
            h3=h2;
            h2=d;
        }else if (d<h2){
            if (d>h3){
                h3=c;
            }
        }
    }
    printf("The third highest number is: %d",h3);
    return 0;
}