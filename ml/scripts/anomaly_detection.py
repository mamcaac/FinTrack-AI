import pandas as pd
import sqlite3
from sklearn.ensemble import IsolationForest
import numpy as np

# Connect to DB
conn = sqlite3.connect('../../data/transactions.db')
df = pd.read_sql_query("SELECT * FROM Transactions", conn)
conn.close()

# Simple anomaly detection
if not df.empty:
    X = df[['amount']].values
    model = IsolationForest(contamination=0.1)
    preds = model.fit_predict(X)
    anomalies = df[preds == -1]
    print("Detected Anomalies:")
    print(anomalies)
else:
    print("No transactions yet.")

# Intelligent suggestion (mock routing)
if not anomalies.empty:
    print("Suggestion: Review high amounts; use Card for large tx.")