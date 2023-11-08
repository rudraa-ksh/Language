#include <iostream>
using namespace std;
inline int SQUARE(int x) { return x*x;}
int main()
{
    int x=5;
    cout << SQUARE(x+1);
    return 0;
}
