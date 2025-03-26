#include <iostream>
#include <string>

using namespace std;


int main(){
    float price;
    cout<<"Enter the basic price of tea: ";
    cin>>price;
    cout<<"New price of tea is: " << (int)(price+(0.1*price))<<endl;
    return 0;
}