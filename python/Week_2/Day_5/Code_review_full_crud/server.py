from flask_app import app
#always remember to import all the controllers here
from flask_app.controllers import post_controllers
if __name__ == '__main__':
    app.run(debug=True)
    