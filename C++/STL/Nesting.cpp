#include <bits/stdc++.h>
using namespace std;

void printkrdebhai(vector<pair<int, int>> v){
    for(int i=0; i<v.size(); i++){
        cout<<v[i].first<<" "<<v[i].second;
    }
    cout<<endl;
}

int main(){
    vector<pair<int, int>> v = {{1,2},{2,3}};
    printkrdebhai(v);
}

//Similarly we can modify line 12 for other containers