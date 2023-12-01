#include <iostream>
using namespace std;

void Multiplication(const int a, const int b);
void Multiplication(const double a, const double b);

int main()
{
    Multiplication(1,3);
    Multiplication(1.5,3.5);
    return 0;
}

void Multiplication(const int a, const int b){
        int c=a*b;
        cout<<c<<endl;
    }

void Multiplication(const double a, const double b){
        double c=a*b;
        cout<<c;
    }
