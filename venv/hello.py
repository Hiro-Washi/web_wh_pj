#  flask.FlaskクラスFlask変数に代入
from flask import Flask
app = Flask(__name__)

# @で始まる行はデコレータ
# 次の行で定義する関数やクラスに何羅漢処理を行う
@app.route('/')
@app.route('/home')
#　この関数を上記URLにマッピング
def hello():
    hello = ("hello"+" ")*3
    return '<h1>Home Page\n$hello</h1>'
@app.route('/about')
def about():
    return '<h1>About Page</h1>'

# 
if __name__ == "__main__":
    app.run(debug=True)
