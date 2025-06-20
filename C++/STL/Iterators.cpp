#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> v = {1,2,2,3};
    for(int i=0;i<v.size();i++){
        cout<<v[i]<<" ";
    }
    cout<<endl;

    vector<int> ::iterator t = v.begin();
    cout<<++*t;

    vector<pair<int, int>> v_p = {{1,2},{2,3},{3,4}};
    vector<pair<int, int>> ::iterator it = v_p.begin();
    cout<<it->first<<it->second;
}

