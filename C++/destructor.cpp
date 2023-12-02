#include <iostream>
using namespace std;
class Stack { 
    char *data_; 
    int top_; // Dynamic
    public: Stack(): data_(new char[10]), top_(-1){
        cout << "Stack() called\n"; 
    } // Constructor
    ~Stack() { cout << "\n~Stack() called\n";
        delete [] data_; // Destructor
    }
// More Stack methods
};
int main() { 
    char str[10] = "ABCDE";
    Stack s; // Init by Stack::Stack() call
    // Reverse string using Stack
}   // De-Init by automatic Stack::~Stack() cal