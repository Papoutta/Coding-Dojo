from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = 'your_secret_key'  

@app.route('/')
def index():
    session['counter'] = session.get('counter', 0) +1
    return render_template('index.html', counter=session['counter'], visit_count=session.get('visit_count', 0))

@app.route('/increment_by_two')
def increment_by_two():
    session['counter'] = session.get('counter', 0) + 2
    return redirect("/")

@app.route('/reset')
def reset_counter():
    session['counter'] = 0
    return redirect("/")

@app.route('/custom_increment', methods=['POST'])
def custom_increment():
    custom_increment = int(request.form.get('custom_increment', 0))
    session['counter'] = session.get('counter', 0) + custom_increment
    return redirect("/")

@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect("/")

if __name__ == '__main__':
    app.run(debug=True)