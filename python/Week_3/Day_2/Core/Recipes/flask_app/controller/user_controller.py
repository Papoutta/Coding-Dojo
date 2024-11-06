from flask_app import app
from flask import render_template, redirect, request, session, flash # type: ignore
from flask_app.models.user_model import User
from flask_app.models.recipes_model import Recipe
from flask_bcrypt import Bcrypt  # type: ignore
bcrypt = Bcrypt(app)

#display route
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/recipes')
def recipes():
    if not 'user_id' in session:
        return redirect('/')
    all_recipes=Recipe.get_all()
    return render_template('recipes.html',all_recipes=all_recipes)

@app.route('/users/create', methods=["post"])
def register():
    if User.validate(request.form):
        pw = bcrypt.generate_password_hash(request.form['password'])
        data = {
            **request.form,
            "password":pw
        }
        user_id = User.register(data)
        user = User.get_by_email({'email': request.form['email']})
        session['user_id']=user_id
        session["first_name"] = user.first_name
        return redirect('/recipes')
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
    session["first_name"] = user.first_name
    return redirect('/recipes')

@app.route('/logout', methods=['post'])
def logout():
    session.clear()
    return redirect("/")