from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<string:name>')
def say_hi(name):
    return f'Hi {name}!'

@app.route('/repeat/<int:times>/<string:word>')
def word_many_times(times, word):
    return (word + " ") * times

@app.errorhandler(404)
def page_not_found(e):
    return 'The value times needs to be an integer', 404

if __name__ == "__main__":
    app.run(debug=True)