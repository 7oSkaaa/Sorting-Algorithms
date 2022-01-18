# Sorting-Algorithms

This Repo have all information needed to study `Sorting Algorithm` and there is a tracer to see how the algorithm work

You can see how to algorithm run with two way you can use the button of `Generate Nums` to generate array and see how the algorithm work or you can enter your numbers that you want to check them by write them in the `text box` seperated by spaces and use button `Use my Numbers` to use them to see how the algorithms work 

## Requirements

**For Linux Users only**

open your terminal
```
sudo apt install python3
```
```
sudo apt install python3-tk
```
## How to run

### Linux

```
git clone https://github.com/7oSkaaa/Sorting-Algorithms.git
```
```
cd Sorting-Algorithms
```
```
python3 main.py
```

### Windows

you can download the repo as `zip` and extract it 

OR 

you can use cmd

```
git clone https://github.com/7oSkaaa/Sorting-Algorithms.git
```
go to the folder of the repo and just double click on `main.exe`

## Video:
https://user-images.githubusercontent.com/63050133/149599718-a7e840c9-0fbc-4afe-acd6-88fe84209176.mp4


--- 



**You can read the information about each algorithm from the algorithms and go to the tracer and run it to see how the algorithm work**




## Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

### Time Complexity
`Best Case` is O(n)

`Worst Case` is O(n<sup>2</sup>)

### Pseudocode

```
begin BubbleSort(list)

   for all elements of list
      if list[i] > list[i+1]
         swap list[i] and list[i + 1]
   return list
   
end BubbleSort
```

### Code

#### C++

```C++
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
```

#### Python

```Python
def bubble_sort(data):
    size = len(data)
    for i in range(size - 1):
        for j in range(size - i - 1):
            if data[j] > data[j  +1]:
                data[j], data[j + 1] = data[j + 1], data[j]
```

#### Java

```Java
void bubbleSort(int arr[]){
    int n = arr.length;
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]){
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
}
```

#### JavaScript

```JavaScript
const bubbleSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] =  [arr[j + 1], arr[j]];
            }
        }
    }
}
```

--- 

## Selection Sort

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
1) The subarray which is already sorted. 
2) Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 

### Time Complexity

`Best Case` is O(n<sup>2</sup>)

`Worst Case` is O(n<sup>2</sup>)


### Pseudocode

```
begin SelectionSort(list)
    for i from 0 to n - 2 do:
      min = i
      for j from i + 1 to n - 1 do:
        if list[j] < list[min]: Min = j
      swap list[j] and list[min]
end SelectionSort
```

### Code

#### C++

```C++
void Selection_Sort(vector < int >& nums){
    int n = nums.size();
    for(int i = 0; i < n; i++){
        int min = i;
        for(int j = i + 1; j < n; j++){
            if(nums[j] < nums[min])
                min = j;
        }
        swap(nums[i], nums[min]);
    }
}
```

#### Python

```Python
def selection_sort(data, drawData, timeTick):
    for i in range(len(data) - 1):
        Min_Idx = i
        for k in range(i + 1, len(data)):
            if data[k] < data[Min_Idx]:
                Min_Idx = k
```

#### Java

```Java
void selection_sort(int arr[]){
    int n = arr.length;
    for (int i = 0; i < n - 1; i++){
        int min_idx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

```
#### JavaScript

```JavaScript
const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++){
        let min_idx = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) min_idx = j;
        }

        [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
    }
}

```
---

## Insertion Sort

Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
Algorithm 
To sort an array of size n in ascending order: 
1) Iterate from arr[1] to arr[n] over the array. 
2) Compare the current element (key) to its predecessor. 
3) If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

### Time Complexity

`Best Case` is O(n<sup>2</sup>)

`Worst Case` is O(n<sup>2</sup>)


### Pseudocode

```
begin InsertionSort(list)
    for i from 1 to n - 1 do:
      v = list[i]
      j = i - 1
      while j >= 0 and list[j] > v do:
          list[j + 1] = list[j]
          j = j - 1
      list[j + 1] = v
end SelectionSort
```

### Code

#### C++

```C++
void Insertion_Sort(vector < int >& nums){
    int n = nums.size();
    for(int i = 0; i < n; i++){
        int value = nums[i], j = i - 1;
        while(j >= 0 && nums[j] > value)
            nums[j + 1] = nums[j], j--;
        nums[j + 1] = value;
    }
}
```

#### Python

```Python
def insertion_sort(data, drawData, timeTick):
    for i in range(len(data)):
        temp = data[i]
        k = i
        while k > 0 and temp < data[k - 1]:
            data[k] = data[k - 1]; k -= 1
        data[k] = temp
```

#### Java

```Java
void insertion_sort(int arr[]){
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j =- 1;
        }
        arr[j + 1] = key;
    }
}
```

---

## Merge Sort

Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m + 1..r] are sorted and merges the two sorted sub-arrays into one. See the following C implementation for details.

### Time Complexity

`Best Case` is O(n `x` log(n))

`Worst Case` is O(n `x` log(n))


### Pseudocode

```
begin MergeSort(list, left, right):
    if left > right 
        return
    mid = (left+right)/2
    mergeSort(list, left, mid)
    mergeSort(list, mid+1, right)
    merge(arr, list, mid, right)
end MergeSort

```
```
begin merge(list, left, right)
  mid = (left + right) / 2
  L[left ... mid]
  R[mid + 1 ... right]
  i = 0, j = 0, k = left
  while i < len(L) and j < len(R)
      if L[i] <= R[j]
         list[k] = L[i]
         k++, i++
      else
         list[k] = R[j]
         k++, j++
  while i < len(L) do
      list[k] = L[i]
      k++, i++
  while(j < len(R) do
      list[k] = R[j]
      k++, j++

end merge
```
### Code

#### C++

```C++
void Merge(int l, int m, int r, vector < int >& nums){
    int sz_1 = m - l + 1, sz_2 = r - m;
    vector < int > left(sz_1), right(sz_2);
    for(int i = 0; i < sz_1; i++) left[i] = nums[l + i];
    for(int i = 0; i < sz_2; i++) right[i] = nums[m + 1 + i];
    int i = 0, j = 0, k = l;
    while(i < sz_1 && j < sz_2)
        nums[k++] = (left[i] <= right[j] ? left[i++] : right[j++]);
    while(i < sz_1) nums[k++] = left[i++];
    while(j < sz_2) nums[k++] = right[j++];
}

void Merge_Sort(vector < int >& nums, int l, int r){
    if(l >= r) return;
    int m = l + (r - l) / 2;
    Merge_Sort(nums, l, m);
    Merge_Sort(nums, m + 1, r);
    Merge(l, m, r, nums);
}
```

#### Python

```Python
def merge(data, start, mid, end, drawData, timeTick):
    L = data[start : mid + 1]
    R = data[mid + 1: end + 1]
    L_idx, R_idx, S_idx = 0, 0, start
    while L_idx < len(L) and R_idx < len(R):
        if L[L_idx] <= R[R_idx]:
            data[S_idx] = L[L_idx]
            L_idx += 1
        else:
            data[S_idx] = R[R_idx]
            R_idx += 1
        S_idx += 1
    while L_idx < len(L):
        data[S_idx] = L[L_idx]
        L_idx += 1; S_idx += 1

    while R_idx < len(R):
        data[S_idx] = R[R_idx]
        R_idx += 1; S_idx += 1


def merge_sort(data, start, end):
    if start < end:
        mid = int((start + end) / 2)
        merge_sort(data, start, mid)
        merge_sort(data, mid + 1, end)
        merge(data, start, mid, end)
```

#### Java

```Java

void merge(int arr[], int l, int m, int r){
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[] = new int[n1];
    int R[] = new int[n2];
    for (int i = 0; i < n1; ++i)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j)
        R[j] = arr[m + 1 + j];
    int i = 0, j = 0;
    int k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void sort(int arr[], int l, int r){
    if (l < r) {
        int m =l+ (r-l)/2;
        sort(arr, l, m);
        sort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
```

---
## Quick Sort

QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 

1) Always pick first element as pivot.
2) Always pick last element as pivot (implemented below)
3) Pick a random element as pivot.
4) Pick median as pivot.

### Time Complexity

`Best Case` is O(n `x` log(n))

`Worst Case` is O(n<sup>2</sup>)

### Pseudocode

```
begin quickSort(arr[], low, high)
    if low < high do
        pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1) 
        quickSort(arr, pi + 1, high)
end quickSort
```
```
begin partition (arr[], low, high)
    pivot = arr[high] 
    i = low - 1
    for j from low to high- 1
        if arr[j] < pivot
            i++;    
            swap arr[i] and arr[j]
    swap arr[i + 1] and arr[high])
    return (i + 1)
}
end partition
```
### Code

#### C++

```C++
int Partition(vector < int >& nums, int l, int r){
    int pivot = nums[r], i = l;
    for(int j = l; j < r; j++){
        if(nums[j] <= pivot)
            swap(nums[i++], nums[j]);
    }
    swap(nums[i], nums[r]);
    return i;
}

void Quick_Sort(vector < int >& nums, int l, int r){
    if(l >= r) return;
    int pivot = Partition(nums, l, r);
    Quick_Sort(nums, l, pivot - 1);
    Quick_Sort(nums, pivot + 1, r);
}
```

#### Python

```Python
def partition(data, start, end, drawData, timeTick):
    i = start + 1
    pivot = data[start]

    for j in range(start + 1, end + 1):
        if data[j] < pivot:
            data[i], data[j] = data[j], data[i]
            i += 1
    data[start], data[i - 1] = data[i - 1], data[start]
    return i - 1

def quick_sort(data, start, end, drawData, timeTick):
    if start < end:
        pivot_position = partition(data, start, end, drawData, timeTick)
        quick_sort(data, start, pivot_position - 1, drawData, timeTick)
        quick_sort(data, pivot_position + 1, end, drawData, timeTick)
```

#### Java

```Java

int partition (int a[], int start, int end)  {  
    int pivot = a[end];  
    int i = (start - 1);  
    for (int j = start; j <= end - 1; j++)  {  
        if (a[j] < pivot){  
            i++;  
            int t = a[i];  
            a[i] = a[j];  
            a[j] = t;  
        }  
    }  
    int t = a[i + 1];  
    a[i + 1] = a[end];  
    a[end] = t;  
    return (i + 1);  
}  
    
void quick_sort(int a[], int start, int end){  
    if (start < end)  {  
        int p = partition(a, start, end);  
        quick(a, start, p - 1);  
        quick(a, p + 1, end);  
    }
}  

```

---

## Counting Sort

Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of each object in the output sequence.


### Time Complexity

`Best Case` is O(n `+` k)

`Worst Case` is O(n `+` k)

### Pseudocode

```
begin CountingSort(A)
  for i = 0 to k do
  c[i] = 0
  for j = 0 to n do
  c[A[j]] = c[A[j]] + 1
  for i = 1 to k do
  c[i] = c[i] + c[i-1]
  for j = n - 1 downto 0 do
  B[ c[A[j]]-1 ] = A[j]
  c[A[j]] = c[A[j]] - 1
end CountingSort

```
### Code

#### C++

```C++

void countSort(vector < int >& nums){
    int max = *max_element(nums.begin(), nums.end());
    int min = *min_element(nums.begin(), nums.end());
    int range = max - min + 1;
    vector < int > count(range), output(arr.size());
    for (int i = 0; i < arr.size(); i++)
        count[arr[i] - min]++;
    for (int i = 1; i < count.size(); i++)
        count[i] += count[i - 1];
    for (int i = arr.size() - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    for (int i = 0; i < arr.size(); i++)
        arr[i] = output[i];
}

```

#### Python

```Python
def counting_sort(data, drawData, timeTick):
    n = max(data) + 1
    count = [0] * n
    for item in data:
        count[item] += 1
    k = 0
    for i in range(n):
        for j in range(count[i]):
            data[k] = i
            k += 1
```

#### Java

```Java

static void countSort(int[] arr){
  int max = Arrays.stream(arr).max().getAsInt();
  int min = Arrays.stream(arr).min().getAsInt();
  int range = max - min + 1;
  int count[] = new int[range];
  int output[] = new int[arr.length];
  for (int i = 0; i < arr.length; i++)
    count[arr[i] - min]++;
  for (int i = 1; i < count.length; i++)
    count[i] += count[i - 1];
  for (int i = arr.length - 1; i >= 0; i--){
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }
  for (int i = 0; i < arr.length; i++)
    arr[i] = output[i];
}

```

---

## Heap Sort

Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.
Heap Sort Algorithm for sorting in increasing order: 
1) Build a max heap from the input data. 
2) At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of the tree. 
3) Repeat step 2 while the size of the heap is greater than 1.



### Time Complexity

`Best Case` is O(n `x` log(n))

`Worst Case` is O(n `x` log(n))

### Pseudocode

```
begin Heapify(A as array, n as int, i as int)
    max = i
    leftchild = 2i + 1
    rightchild = 2i + 2
    if (leftchild <= n) and (A[i] < A[leftchild])
        max = leftchild
    else 
        max = i
    if (rightchild <= n) and (A[max]  > A[rightchild])
        max = rightchild
    if (max != i)
        swap(A[i], A[max])
        Heapify(A, n, max)
end Heapify

Heapsort(A as array)
   n = length(A)
   for i = n/2 downto 1   
     Heapify(A, n ,i)
   
   for i = n downto 2
     exchange A[1] with A[i]
     A.heapsize = A.heapsize - 1
     Heapify(A, i, 0)
end Heapsort

```
### Code

#### C++

```C++

void heapify(vector < int >& nums, int i){
    int largest = i, l = 2 * i + 1, r = 2 * i + 2, n = nums.size();
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(vector < int >& nums){
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

```

#### Python

```Python
def heapify(data, n, i):
    largest, left, right = i, 2 * i + 1, 2 * i + 2
    if left < n and data[i] < data[left]:
        largest = left
    if right < n and data[largest] < data[right]:
        largest = right
    if largest != i:
        data[i], data[largest] = data[largest], data[i]
        heapify(data, n, largest)

def heap_sort(data):
    n = len(data)
    for i in range(n - 1, -1, -1):
        heapify(data, n, i)
    for i in range(n - 1, 0, -1):
        data[i], data[0] = data[0], data[i]
        heapify(data, i, 0)
```

#### Java

```Java

public void heap_sort(int arr[]){
   int n = arr.length;
   for (int i = n / 2 - 1; i >= 0; i--)
      heapify(arr, n, i);
   for (int i = n - 1; i > 0; i--) {
      int temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      heapify(arr, i, 0);
   }
}
public void heapify(int arr[], int n, int i){
   int largest = i, l = 2 * i + 1, r = 2 * i + 2;
   if (l < n && arr[l] > arr[largest])
      largest = l;
   if (r < n && arr[r] > arr[largest])
      largest = r;
   if (largest != i) {
      int swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;
      heapify(arr, n, largest);
   }
}

```

---
