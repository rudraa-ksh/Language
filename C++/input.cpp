#include <iostream>
#include<string>
using namespace std;
int main()
{
    //using getline()
    string name;
    cout<<"Enter your name: "<<endl;
    getline(cin,name);
    cout<<"Your Name is: "<<name<<endl;
    
    int a,b;
    cout << "Enter the number: " << endl;
    cin >> a;
    cin >> b;
    int sum=a+b;
    cout << "Sum is: " << sum;
    
    return 0;
}