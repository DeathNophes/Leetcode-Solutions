class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        l = 1  # We set the left pointer

        # We iterate from index one to the right and thus setting another pointer (right)
        # We check if the right pointer value is the same as the previous one in the list
        # We set the value at the left pointer to equal that of the right pointer
        # We increment the left pointer

        for r in range(1, len(nums)):
            if nums[r] != nums[r - 1]:
                nums[l] = nums[r]
                l += 1

        return l
