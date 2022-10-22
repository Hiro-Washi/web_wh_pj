from minimal_app import app#=Flask(__name__)

@app.route('/')
def index():
    return "Hello, This is Minimal-App"
