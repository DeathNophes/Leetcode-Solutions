# The idea here is that we "squash" all elements that aren't the majority element, one by one.
# In the end, only the majority element remains.

# This is the Boyer-Moore Majority Vote algorithm. The idea is that whenever we come across an element
# that is NOT the candidate for the majority element, they "neutralize" each other.
# If there is a true majority element, it will survive the process in the end.

class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        count = 0
        candidate = None

        for num in nums:
            if count == 0:
                candidate = num

            if num == candidate:
                count += 1
            else:
                count -= 1

        return candidate
