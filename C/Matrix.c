#include <stdio.h>
int main()
{
    int arr[3][3],e;
    printf("Enter the elements for matrix:\n");
    for(int x=0;x<3;x++){
        for(int y=0;y<3;y++){
            scanf("%d",&e);
            arr[x][y]=e;
        }
    }
    printf("Array:\n");
    for(int m=0;m<3;m++){
        for(int n=0;n<3;n++){
            printf("%d ",arr[m][n]);
        }
    }
    printf("\nFront Digonal:\n");
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            if(i==j){
                printf("%d\n",arr[i][j]);
            }
        }
    }
    printf("Back Diagonal:\n");
    for(int k=0;k<3;k++){
        for(int l=0;l<3;l++){
            if(l+k==2){
                printf("%d\n",arr[k][l]);
            }
        }
    }
    return 0;
}
