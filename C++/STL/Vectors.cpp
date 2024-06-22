#include <bits/stdc++.h>
using namespace std;

void printkrdebhai(vector<int> v){
    for(int i=0; i<v.size(); i++){
        cout<<v[i];
    }
    cout<<endl;
}

int main()
{
    int a[10];    //static
    vector<int> v;  //dynamic
    int n;
    cout<<"Enter how many element you want in your vector: ";
    cin>>n;
    int x;
    for (int i = 0;i<n; i++)
    {
        cout<<"Enetr element: ";
        cin>>x;
        v.push_back(x); //O(1)
    }
    printkrdebhai(v);
     // other ways of initialization
    vector<int> v2(5);
    printkrdebhai(v2);

    vector<int> v3(5,2);  
    printkrdebhai(v3);

    v.pop_back();       //used to remove element from last  //O(1)
    printkrdebhai(v);

    vector<int> v4= v; //Make a shallow copy  //O(N)
    vector<int> &v5 = v;  // Makes a deep copy //O(1)
    return 0;
}