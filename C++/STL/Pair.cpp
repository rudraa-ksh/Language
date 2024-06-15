#include <bits/stdc++.h>
using namespace std;

int main(){
    //pairs
    pair<int, string> p;  // we can take any container or datatype
    p = make_pair(2,"abc");
    // p ={2, "abc"} we can also use this
    cout<<p.first<<p.second<<endl;
    p.first = 6;
    cout<<p.first<<p.second<<endl;

    //pairs as array
    pair<int, int> p1[3];
    p1[0] = {1,2};
    p1[1] = {3,4};
    p1[2] = {5,6};
    for (int i = 0; i < 3; i++){
        cout<<p1[i].first<<" "<<p1[i].second<<endl;
    }

    //taking input
    pair<int, int> p2;
    cin>>p2.first;
    cout<<p2.first;
}