from flask_app import app
from flask import redirect,request,render_template # type: ignore
from flask_app.models.user_model import Users

@app.route('/')
def index():
    return redirect('/users')


@app.route('/users')
def users():
    return render_template("users.html",users=Users.get_all())

@app.route("/users/<int:id>")
def user(id):
    data = {"id": id}
    user = Users.user_id(data)
    return render_template("user.html", user=user)


@app.route('/users/new_user')
def new():
    return render_template("new_user.html")

@app.route('/user/create',methods=['POST'])
def create():
    data={**request.form} # it unpacks all the key-value pairs from request.form and creates a new dictionary with the same contents.
    #data = {
    # "id" : request.form.["id"],
    # "user_name": request.form["user_name"],
    # "last_name": request.form["last_name"],
    # "email": request.form["email"],
    #}
    print(request.form)
    id = Users.save(data)
    return redirect('/users/' + str(id))


@app.route("/users/<int:id>/delete")
def delete(id):
    Users.delete({"id": id})
    return redirect("/")

@app.route("/users/<int:id>/edit")
def edit(id):
    user=Users.user_id({"id": id})
    return render_template('/edit_user.html/', data = user)

@app.route("/users/<int:id>/update", methods=["POST"])
def update(id):
    data = {
        "id":id, 
        "first_name":request.form['first_name'],
        "last_name":request.form['last_name'],
        "email":request.form['email']
    }
    print(data)
    Users.edit(data)
    return redirect('/users/' + str(data['id']))