from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user_model import User
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app)

#display route
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users/create', methods=["post"])
def register():
    if User.validate(request.form):
        pw = bcrypt.generate_password_hash(request.form['password'])
        data = {
            **request.form,
            "password":pw
        }
        user_id = User.register(data)
        session['user_id']=user_id
        return redirect('/dashboard')
    else:
        return redirect('/')
    
@app.route('/login', methods=["POST"])
def login():
    user = User.get_by_email({'email': request.form['email']})
    if not user : 
        flash("Invalid Email/Password", "login")
        return redirect('/')
    if not bcrypt.check_password_hash(user.password, request.form["password"]):
        flash("Invalid Email/Password", "login")
        return redirect('/')
    session["user_id"] = user.id
    return redirect('/dashboard')

@app.route('/logout', methods=["POST"])
def logout():
    session.clear()
    return redirect('/')