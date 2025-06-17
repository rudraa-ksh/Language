#include <stdio.h>
int main()
{
    int n[]={5,10,70,17,19,50,80};
    int even=0,odd=0;
    for(int i=0;i<7;i++)
    {
        if(n[i]%2==0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    printf("%d\n",even);
    printf("%d",odd);
    return 0;
}
