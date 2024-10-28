from flask import Flask, render_template, request, session, redirect # type: ignore
import random

app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/')
def index():
    if 'number' not in session:
        session['number'] = random.randint(1, 100)
        session['attemps'] = 0
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guess():
    session['attemps'] += 1
    user_guess = int(request.form ['guess'])

    if user_guess < session['number']:
        hint = "too low!"
    elif user_guess > session['number']:
        hint = "too high!"
    else:
        hint = f"Correct the guess  was {session['number']} ! it took u {session['attemps']} attemps"

    return render_template('index.html', hint=hint)

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)