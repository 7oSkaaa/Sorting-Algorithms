#include <stdio.h>

void swap(int *x, int *y){
    int temp = *x;
    *x = *y, *y = temp;
}

void bubbleSort(int* arr, int n){
   int i, j;
   for (i = 0; i < n - 1; i++)      
       for (j = 0; j < n - i - 1; j++) 
           if (arr[j] > arr[j + 1])
              swap(&arr[j], &arr[j + 1]);
}

int main(){

    return 0;
}