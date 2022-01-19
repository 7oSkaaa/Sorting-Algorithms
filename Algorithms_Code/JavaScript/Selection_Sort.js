const Selection_Sort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) min_idx = j;
        }

        [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
    }
}