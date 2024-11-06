from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'your_secret_key' 

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/result', methods=['POST'])
def result():
    if request.method == 'POST':
        session['name'] = request.form['name']
        session['location'] = request.form['location']
        session['language'] = request.form['language']
        session['comment'] = request.form['comment']

        return redirect('/display_result')

@app.route('/display_result')
def display_result():
    return render_template('result.html', name=session.get('name'), location=session.get('location'),
    language=session.get('language'), comment=session.get('comment'))

if __name__ == '__main__':
    app.run(debug=True)