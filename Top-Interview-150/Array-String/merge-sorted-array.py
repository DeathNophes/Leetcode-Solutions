class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        new_arr = []

        for i in range(m):
            new_arr.append(nums1[i])
        for i in range(n):
            new_arr.append(nums2[i])

        new_arr.sort()

        for i in range(len(nums1)):
            nums1[i] = new_arr[i]