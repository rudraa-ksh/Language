#include <stdio.h>

int main(){
    int a,b,c,d,l1,l2;
    printf("Enter 1st number : ");
    scanf("%d",&a);
    printf("Enter 2nd number : ");
    scanf("%d",&b);
    printf("Enter 3rd number : ");
    scanf("%d",&c);
    printf("Enter 4th number : ");
    scanf("%d",&d);
    l1=a;
    if(b<a){
        l1=b;
        l2=a;
    }else if(b>a){
        l1=a;
        l2=b;
    }if(c<a){
        l1=c;
        l2=a;
    }else if(c>a){
        l1=a;
        l2=c;
    }if(d<a){
        l1=d;
        l2=a;
    }else if(d>a){
        l1=a;
        l2=d;
    }
    printf("The second smallest number is: %d",l2);
    return 0;
}