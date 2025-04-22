class Solution:
    def removeElement (self, nums, val):
        valNums = 0

        for number in nums:
            if number == val:
                valNums += 1
        
        for _ in range(valNums):
            nums.remove(val)

        k = len(nums)
        
        return k
        