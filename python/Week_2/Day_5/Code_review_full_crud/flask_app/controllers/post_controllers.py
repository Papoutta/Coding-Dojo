from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.post_moderl import Post

#display route for create form
@app.route('/posts/new')
def create_form():
    return render_template('create.html')

#action route for create form
@app.route('/posts/create', methods=['POST'])
def submit_create():
    Post.create_post(request.form)
    return redirect('/posts')

#display route for home
@app.route('/posts')
def home():
    all_posts = Post.get_all()
    return render_template('home.html',all_posts=all_posts)

#display route for show one post
@app.route('/posts/show/<int:id>')
def show_one(id):
    post = Post.get_by_id({"id":id})
    return render_template('show_one.html', post = post) 

#display route for edit form
@app.route('/posts/edit/<int:id>')
def edit(id):
    post = Post.get_by_id({'id': id})
    return render_template("edit.html", post = post)

#action route for edit form
@app.route('/posts/update/<int:id>', methods=['POST'])
def update(id):
    data = {
        "id": id,
        **request.form
    }
    Post.update(data)
    return redirect('/posts')

#delete route
@app.route('/posts/delete/<int:id>')
def delete(id):
    Post.delete({"id": id})
    return redirect('/posts')
