# FinTrack-AI: Personal Finance Tracker with AI Insights

FinTrack-AI is a web-based application I built to track personal expenses, simulate payments, and gain intelligent insights from transaction data. It's a full-stack project combining modern frontend, backend with functional programming, simple machine learning for anomaly detection, and containerized deployment.

---
## Motivation
As a beginner in software development, I wanted to experiment with building a finance app that handles user interactions smoothly, processes data logically, analyzes patterns, and runs reliably. This project helped me learn React for UI, Node.js with FP patterns for backend, Python ML for insights, and Docker for infra.

---
## Features
- **Dashboard UI**: Clean interface for logging transactions and 1-click simulated payments.
- **Payment Simulation**: Mock UPI/card payments with validation and auth.
- **Transaction Management**: Store and list expenses/incomes.
- **AI Insights**: Detect anomalies in spending, suggest optimal "payment routes" based on history, and visualize data.
- **Reliable Setup**: Dockerized for easy deployment, with basic error handling.

---
## Tech Stack
- **Frontend**: React (with Hooks for state management)
- **Backend**: Node.js, Express, SQLite (via Sequelize), Ramda for functional programming in business logic
- **Data Science**: Python, scikit-learn (Isolation Forest for anomalies), Matplotlib for viz, Pandas/Numpy
- **Infra**: Docker, Docker Compose
- **Other**: JWT for auth, Axios for API calls

---
## Porject Structure
- [View](https://github.com/AmSh4/FinTrack-AI/blob/main/Folder%20Structure.md)

---
## Setup and Running Locally
1. **Clone the repo**: `git clone https://github.com/AmSh4/FinTrack-AI.git`
2. **Frontend (client folder)**:
   - `cd client`
   - `npm install`
   - `npm start` (runs on http://localhost:3000)
3. **Backend (server folder)**:
   - `cd server`
   - `npm install`
   - Create `.env` with `JWT_SECRET=yoursecret` and `DB_PATH=../data/transactions.db`
   - `npm start` (runs on http://localhost:5000)
4. **ML Scripts (ml folder)**:
   - `cd ml`
   - `pip install -r requirements.txt`
   - Run `python scripts/generate_mock_data.py` to create sample data in ../data/transactions.db
   - Run `python scripts/anomaly_detection.py` for insights
   - Run `python scripts/visualize.py` to generate charts (saves as PNG)
5. **Full App with Docker**:
   - `cd docker`
   - `docker-compose up --build`
   - Access at http://localhost:3000 (frontend connects to backend at 5000)

---
## Usage
- Register/login via API (mock auth).
- Add transactions via dashboard.
- Simulate payments with 1-click.
- Run ML scripts for anomaly reports and viz in console/output files.

---
## Future Improvements
- Integrate real payment APIs.
- Advanced ML models.
- Cloud deployment.

---
## License

MIT License

---

