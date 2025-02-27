function merge (nums1, m, nums2, n) {
    let newArr = [];
    for (let i = 0; i < m; i++) {
        newArr.push(nums1[i]);
    }
    for (let i = 0; i < n; i++) {
        newArr.push(nums2[i])
    }

    newArr.sort((a, b) => a - b);
    
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = newArr[i];
    }
}
