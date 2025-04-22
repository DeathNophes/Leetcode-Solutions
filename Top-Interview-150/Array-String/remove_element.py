class Solution:
    def removeElement (self, nums: list[int], val):
        value_instances = 0

        for number in nums:
            if number == val:
                value_instances += 1
        
        for _ in range(value_instances):
            nums.remove(val)

        k = len(nums)
        
        return k
        