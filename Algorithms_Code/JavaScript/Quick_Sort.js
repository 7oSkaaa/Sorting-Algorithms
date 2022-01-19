const partition = (a, start, end) => {
    let pivot = a[end];
    let i = (start - 1);

    for (let j = start; j < end; j++) {
        if (a[j] < pivot) {
            i++;
            [a[i], a[j]] = [a[j], a[i]];
        }
    }

    [a[i + 1], a[end]] = [a[end], a[i + 1]];
    return (i + 1);
}

const Quick_Sort = (a, start, end) => {
    if (start < end) {
        let partitionIndex = partition(a, start, end);
        Quick_Sort(a, start, partitionIndex - 1);
        Quick_Sort(a, partitionIndex + 1, end);
    }
}