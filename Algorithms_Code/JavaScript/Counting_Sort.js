const Counting_Sort = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const range = max - min + 1;

    const count = new Array(range);
    const output = new Array(arr.length);

    for (let i = min; i <= max; i++)
        count[i] = 0;

    for (let i = 0; i < arr.length; i++)
        count[arr[i]] += 1;

    let j = 0;

    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
}