from flask import Flask, render_template, request, redirect, session, url_for

app = Flask(__name__)
app.secret_key = 'your_secret_key' 

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/result', methods=['POST'])
def result():
    if request.method == 'POST':
        session['name'] = request.form['name']
        session['email'] = request.form['email']
        session['gender'] = request.form['gender']
        session['hobbies'] = request.form.getlist('hobbies')  

        return redirect('/display_result')

@app.route('/display_result')
def display_result():
    return render_template('result.html', name=session.get('name'), email=session.get('email'),
    gender=session.get('gender'), hobbies=session.get('hobbies'))

if __name__ == '__main__':
    app.run(debug=True)