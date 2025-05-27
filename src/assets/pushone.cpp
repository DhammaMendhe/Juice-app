#include <bits/stdc++.h>
using namespace std;
// vector<int> plusOne(vector<int> &digits)
void plusOne(vector<int> &digits)

{
    int dgt = 0;
    vector<int> newarr;
    for (int i = 0; i < digits.size(); i++)
    {
        dgt = dgt * 10 + digits[i];
    }
    cout << dgt << endl;
    int secdgt = dgt + 1;
    cout << secdgt << endl;
    int thirddgt = 0;
    for (int i = 0; i < digits.size(); i++)
    {
        int swap = 0;
        swap = secdgt % 10;
        thirddgt = thirddgt * 10 + swap;
        secdgt = secdgt / 10;
    }
    cout << thirddgt<<endl;
    int forth = 0;
    for (int i = 0; i < digits.size(); i++)
    {
      int forth =   thirddgt %10;
         
        newarr.push_back(forth);
        thirddgt = thirddgt/10;
    }
 for (int i = 0; i < digits.size(); i++)
    {
   cout<<newarr[i]<<endl;
    }}
int main()
{

    vector<int> arr = {4, 3, 2, 1};
    vector<int> newarr;
    plusOne(arr);

    return 0;
}