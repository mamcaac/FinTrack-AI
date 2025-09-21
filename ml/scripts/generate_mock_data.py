import sqlite3
import random
from datetime import datetime

conn = sqlite3.connect('../../data/transactions.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS Transactions
             (id INTEGER PRIMARY KEY, amount REAL, method TEXT, timestamp TEXT)''')

# Generate mock data
methods = ['UPI', 'Card']
for _ in range(50):
    amount = random.uniform(10, 1000)
    method = random.choice(methods)
    timestamp = datetime.now().isoformat()
    c.execute("INSERT INTO Transactions (amount, method, timestamp) VALUES (?, ?, ?)", (amount, method, timestamp))

conn.commit()
conn.close()
print("Mock data generated.")