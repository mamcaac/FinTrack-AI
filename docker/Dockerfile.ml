FROM python:3.9
WORKDIR /app
COPY ../ml /app
RUN pip install -r requirements.txt
CMD ["python", "scripts/anomaly_detection.py"]