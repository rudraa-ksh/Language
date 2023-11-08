#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
    char data[]={'a','b','c','d'}, k='a';
    if(binary_search(data,data+5,k)){
        cout<<"Found\n"<<endl;
    }
    else{
        cout<<"Not found\n"<<endl;
    }
    return 0;
}
