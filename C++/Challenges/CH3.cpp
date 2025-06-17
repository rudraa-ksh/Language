#include <iostream>
#include <string>

using namespace std;


int main(){
    string tea;
    cout<<"Enter the name of the tea: ";
    getline(cin,tea);

    int quantity;
    cout<<"How many cups you want: ";
    cin>>quantity;
    return 0;
}