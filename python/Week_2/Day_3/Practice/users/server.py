from flask import Flask, render_template, request, redirect

from user_model import Users

app=Flask(__name__)

@app.route('/')
def index():
    return redirect('/users')


@app.route('/users')
def users():
    return render_template("users.html",users=Users.get_all())


@app.route('/user/new_user')
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
    # "created_at": request.form["created_at"]
    #}
    print(request.form)
    print(Users.save(data))
    return redirect('/users')


if __name__=="__main__":
    app.run(debug=True)