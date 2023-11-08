#include <iostream>
#include <cstring>
#include <stack>
using namespace std;

int main()
{
    stack<char> s;
    char str[10]="ABCDE";
    for (int i = 0; i < strlen(str); i++)
    {
        s.push(str[i]);
    }
    cout << "Reversed Strings" << endl;
    while (!s.empty()){
        cout<< s.top(),s.pop();
    }    
    return 0;
}