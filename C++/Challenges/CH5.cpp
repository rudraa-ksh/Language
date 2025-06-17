#include <iostream>
#include <string>

using namespace std;


int main(){
    int notea;
    cout<<"Enter the number of tea bags you have: ";
    cin>>notea;

    if(notea<20){
        notea+=10;
        cout<<"updated number of tea bags are: "<<notea<<endl;
    }
    return 0;
}