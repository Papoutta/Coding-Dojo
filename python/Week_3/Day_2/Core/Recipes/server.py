from flask_app import app
from flask_app.controller import user_controller
from flask_app.controller import recipe_controller

if __name__ == "__main__":
    app.run(debug=True)