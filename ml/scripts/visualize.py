import pandas as pd
import sqlite3
import matplotlib.pyplot as plt

conn = sqlite3.connect('../../data/transactions.db')
df = pd.read_sql_query("SELECT * FROM Transactions", conn)
conn.close()

# Aesthetic viz
plt.figure(figsize=(10, 6))
df.groupby('method')['amount'].sum().plot(kind='bar', color=['blue', 'green'])
plt.title('Total Amounts by Method')
plt.ylabel('Amount')
plt.savefig('transaction_viz.png')
print("Visualization saved as transaction_viz.png")