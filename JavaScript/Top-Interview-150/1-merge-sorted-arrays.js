// let nums1 = [1, 2, 3, 0, 0, 0]
// let m = 3
// let nums2 = [2, 5, 6]
// let n = 3

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
