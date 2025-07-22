#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> v = {1,2,2,3};
    for(int i=0;i<v.size();i++){
        cout<<v[i]<<" ";
    }
    cout<<endl;

    vector<int> ::iterator t;    //Iterators are pointer based variables for looping through various containers.
    for( t = v.begin(); t!= v.end(); t++){
        cout<<*t<<" ";
    }
    cout<<endl;

    vector<pair<int, int>> v_p = {{1,2},{2,3},{3,4}};
    vector<pair<int, int>> ::iterator it = v_p.begin();
    cout<<it->first<<it->second;
}

