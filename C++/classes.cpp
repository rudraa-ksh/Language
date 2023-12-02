#include <iostream>
using namespace std;

class Complex{public:
    double re, im;

    void print(){
        cout<<re<<im;
    }
};

int main(int argc, char const *argv[])
{
    Complex Com ={4.2, 5.3};
    Com.print();
    return 0;
}
