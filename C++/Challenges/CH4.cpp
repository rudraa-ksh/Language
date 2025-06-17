#include <iostream>
#include <string>

using namespace std;


int main(){

    int tea;
    float price;
    cout<<"Enter the number tea plates you want: ";
    cin>>tea;
    cout<<"Enter the price per pack: ";
    cin>>price;
    float total = price*tea;
    cout<<"The total price of tea packs is: "<<total+(0.1*total)<<endl;
    return 0;
}