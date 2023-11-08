#include <iostream>
#include <algorithm>
using namespace std;
bool compare(int a, int b){
    return a>b; //decending comparison
}
int main()
{
    int data[]={10,58,1,25,89,};
    sort(data,data+5,compare);  //compare is not required in ascending comparsion
    for(int i=0;i<5;i++){
        cout<< data[i]<< " "; 
    }
    return 0;
}
