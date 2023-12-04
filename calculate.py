# calculate max position

total_funds = 10000
accept_loss = 5
strategy_loss = 10

max_position = (total_funds * accept_loss / 100) / (strategy_loss / 100)
print(max_position)