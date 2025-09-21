FinTrack-AI/
├── README.md
├── client/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.css
│       ├── App.js
│       ├── components/
│       │   ├── Dashboard.js
│       │   ├── PaymentButton.js
│       │   ├── TransactionList.js
│       │   └── VizChart.js
│       ├── index.js
│       └── services/
│           └── api.js
├── server/
│   ├── .env
│   ├── package.json
│   ├── src/
│   │   ├── app.js
│   │   ├── controllers/
│   │   │   └── paymentController.js
│   │   ├── models/
│   │   │   └── transactionModel.js
│   │   ├── routes/
│   │   │   └── paymentRoutes.js
│   │   ├── server.js
│   │   └── utils/
│   │       ├── fpUtils.js
│   │       └── mockIntegrations.js
├── ml/
│   ├── requirements.txt
│   ├── scripts/
│   │   ├── anomaly_detection.py
│   │   ├── generate_mock_data.py
│   │   └── visualize.py
├── docker/
│   ├── Dockerfile.client
│   ├── Dockerfile.server
│   ├── Dockerfile.ml
│   └── docker-compose.yml
└── data/
    └── transactions.db  (This will be generated on run; include an empty file if needed)