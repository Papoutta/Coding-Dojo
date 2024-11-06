from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.party_model import Party 
from flask_app.models.user_model import User


@app.route('/dashboard')
def dashboard():
    if not "user_id" in session : 
        return redirect('/')
    parties= Party.get_all()
    logged_user = User.get_by_id({'id' : session['user_id']})
    return render_template('dashboard.html', parties= parties, user = logged_user)

@app.route('/parties/new')
def new_party():
    if not "user_id" in session : 
        return redirect('/')
    return render_template('create.html')

@app.route('/parties/create', methods=['POST'])
def add_party():
    if Party.validate(request.form):
        data = {
            **request.form,
            "user_id" : session["user_id"]
        }
        Party.create(data)
        return redirect('/dashboard')
    return redirect("/parties/new")

@app.route('/parties/<int:id>')
def show_one(id):
    if not "user_id" in session : 
        return redirect('/')
    party = Party.get_by_id({'id' : id})
    return render_template('show.html', party = party )

@app.route('/parties/<int:id>/edit')
def edit(id):
    if not "user_id" in session : 
        return redirect('/')
    party = Party.get_by_id({'id' : id})
    return render_template("edit.html", party = party)

@app.route('/parties/<int:id>/update', methods = ["post"])
def update(id):
    if Party.validate(request.form):
        data = {
            **request.form,
            "id" : id
        }
        Party.update(data)
        return redirect('/dashboard')
    return redirect(f'/parties/{id}/edit')

@app.route('/parties/<int:id>/delete', methods = ["post"])
def delete(id):
    Party.delete({"id" : id})
    return redirect('/dashboard')


