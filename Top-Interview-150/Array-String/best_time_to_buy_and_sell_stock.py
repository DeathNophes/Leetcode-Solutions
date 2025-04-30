class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        buy_stock = prices[0]
        profit = 0

        for i in range(1, len(prices)):
            if buy_stock > prices[i]:
                buy_stock = prices[i]
            
            profit = max(profit, prices[i] - buy_stock)
        
        return profit
