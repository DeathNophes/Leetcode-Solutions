class Solution:
    def romanToInt(self, s: str) -> int:
        # Smaller before larger => subtract the smaller from the result
        # Largest to smallest => add the numbers to the result

        res = 0
        roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50,
                 'C': 100, 'D': 500, 'M': 1000}

        for i in range(len(s)):
            if i + 1 < len(s) and roman[s[i]] < roman[s[i + 1]]:
                res -= roman[s[i]]
            else:
                res += roman[s[i]]

        return res
