#include<stdio.h>
int main(){
    int a,b,c;
    printf("the value of a is ");
    scanf("%d",&a);
    printf("the value of b is ");
    scanf("%d,",&b);
    printf("the value of c is ");
    scanf("%d",&c);
    if(a<b){
        if(a<c){
            printf("a is smallest no");
        }
    }
    if (b<c){
        if(b<a){
            printf("b is smallest no");
        }
    }
    if(c<a){
        if(c<b){
            printf("c is smallest no");
        }
    }
    return 0;
}