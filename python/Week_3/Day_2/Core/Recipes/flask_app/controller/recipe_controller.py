from flask_app import app
from flask import render_template, redirect, request, session, flash # type: ignore
from flask_app.models.recipes_model import Recipe

#Display route to create recipe
@app.route('/recipes/new')
def new_recipe():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('/new_recipe.html')

#Action route to create recipe
@app.route('/recipes/create', methods = ['POST'])
def create_recipe():
    if Recipe.validate(request.form) :
        data={
            **request.form,
            "user_id" : int(session['user_id'])
        }
        Recipe.create(data)
        return redirect('/recipes')
    return redirect('/recipes/new')

@app.route('/recipes/delete/<int:id>')
def delete_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    Recipe.delete({'id':id})
    return redirect("/recipes")

@app.route('/recipes/<int:id>')
def one_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    recipe=Recipe.get_by_id({'id':id})
    return render_template('one_recipe.html',recipe=recipe)

#display route to edit recipe
@app.route('/recipes/edit/<int:id>')
def edit_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    recipe=Recipe.get_by_id({'id':id})
    return render_template('edit_recipe.html',recipe=recipe)

#action route to update the edited recipe
@app.route('/recipes/update',methods=['post'])
def update_recipe():
    if Recipe.validate(request.form):
        data={**request.form}
        Recipe.update(data)
        return redirect('/recipes')
    return redirect (f'/recipes/edit/{request.form["id"]}')

