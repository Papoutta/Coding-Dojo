from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Define the list of dictionaries
    users = [
        {'first_name': 'Farouk', 'last_name': 'Ghezal'},
        {'first_name': 'Achref', 'last_name': 'Hadhri'},
        {'first_name': 'Yasmine', 'last_name': 'Ghezal'},
        {'first_name': 'Ali', 'last_name': 'Hadhri'}
    ]

    # Pass the users list to the template
    return render_template('index.html', users=users)

if __name__ == '__main__':
    app.run(debug=True)