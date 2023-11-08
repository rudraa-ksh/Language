// chaliye shuru karte hai cll by value
# include <stdio.h>
//int Sumfunction(int a,int b);
int main(){
    int x=10,y=20;
    Swap(&x,&y);
    printf("\n x= %d and y= %d",x,y);
    return 0;
}
int Swap(int *x,int *y){
    int temp;
    temp = *x;
    *x=*y;
    *y=temp;    
    printf("\n x= %d and y= %d",x,y);
    return 0;
}