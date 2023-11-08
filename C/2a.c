#include <stdio.h>

struct queve{
    int val[9];
    int f,r;
}que;

void enqueve();
void display();
void operation(int k, struct queve* que);

void main()
{
    for (int i = 0; i < 9; i++)
    {
        enqueve();
    }
    operation(9, &que);
    display();
}

void enqueve(){
    int x;
    if (que.r==8){
        printf("Queve Overloaded!\n");
    }else{
        printf("Enter element:");
        scanf("%d",&x);
        que.val[++que.r]=x;
    }
}

void operation(int k, struct queve* que){
    
}