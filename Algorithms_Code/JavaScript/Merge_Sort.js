const merge = (arr, l, m, r) => {
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);

    // Copy left half to L array
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];

    // Copy right half to R array
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    let i = 0,
        j = 0;
    let k = l;

    // Overwrite elements in original array in the right order 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements in L, if exist
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy remaining elements in R, if exist
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

const Merge_Sort = (arr, l, r) => {
    if (l < r) {
        let m = l + Math.floor((r - l) / 2);
        Merge_Sort(arr, l, m);
        Merge_Sort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}