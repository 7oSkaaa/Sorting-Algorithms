#include <bits/stdc++.h>
using namespace std;

void Bubble_Sort(vector < int >& nums){
    int n = nums.size();
    for(int i = 0; i < n; i++){
        bool is_sorted = true;
        for(int j = i; j < n; j++){
            if(nums[j] < nums[i])
                swap(nums[i], nums[j]), is_sorted = false;
        }
        if(is_sorted) return;
    }
}

int main(){
    
    return 0;
}