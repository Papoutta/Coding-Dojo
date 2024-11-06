from flask_app import app
from flask import redirect,request,render_template
from flask_app.models.dojo_model import Dojo
from flask_app.models.ninja_model import Ninja


@app.route('/ninjas')
def ninjas():
    all_dojos=Dojo.get_all()
    return render_template('/ninjas.html',all_dojos=all_dojos)

@app.route('/create/ninja', methods=['post'] )
def create_movie():
    data={"first_name":request.form['first_name'],"last_name":request.form['last_name'],"age":request.form['age'],"dojo_id":request.form['dojo_id']}
    Ninja.save(data)
    id=request.form['dojo_id']
    return redirect('/dojos/'+id)