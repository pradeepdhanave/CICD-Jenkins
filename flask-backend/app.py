from flask import Flask, jsonify
import os

app = Flask(__name__)

# Basic endpoint to show the backend is running
@app.route('/api/status')
def api_status():
    return jsonify({
        "service": "Flask Backend",
        "message": "Hello from the Flask API!",
        "version": "1.2" to "1.3",
        "hostname": os.uname()[1]
    })

# Health check for a process manager
@app.route('/health')
def health_check():
    return "OK", 200

if __name__ == '__main__':
    # Listen on all public IPs on port 5000
    app.run(host='0.0.0.0', port=5000)