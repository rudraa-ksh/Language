#include <iostream>
#include <string>

using namespace std;


int main(){
    int buy, member_since;

    cout<<"Enter the number tea bags user purchased: ";
    cin>>buy;

    cout<<"Enter the number year the user is memeber: ";
    cin>>member_since;

    if(buy>12 || member_since>1){
        cout<<"The user qualifies the discount"<<endl;
    }else{
        cout<<"The user doesn't qualifies the discount"<<endl;
    }
    return 0;
}