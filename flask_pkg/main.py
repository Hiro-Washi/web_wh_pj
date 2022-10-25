from flask_pkg import app
from flask import render_template

@app.route('/')
def index():
    button = { 'name' : 'Launcher',
               'desc' : '‹@”\‚Ì‹N“®',
               'data' : 'any data'
    }
    return render_template('vt_index.html',
                            info1=button)
