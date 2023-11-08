#include<stdio.h>
int main(){
    int a,b,c,d;
    printf("the value of a is ");
    scanf("%d",&a);
    printf("the value of b is ");
    scanf("%d,",&b);
    printf("the value of c is ");
    scanf("%d",&c);
    printf("the value of d is ");
    scanf("%d",&d);
    if(a<b){
        if(a<c){
            if (a<d){
            printf("a is  smallest no");
            }
        }
    }
    if (b<c){
        if(b<a){
            if(b<d){
            printf("b is  smallest no");
            }
        }
    }
    if(c<a){
        if(c<b){
            if(c<d){
            printf("c is  smallest no");
            }
        }
    }
    if(d<a){
        if(d<b){
            if(d<c){
                printf("d is  smallest no");
            }
        }
    }
    return 0;
}