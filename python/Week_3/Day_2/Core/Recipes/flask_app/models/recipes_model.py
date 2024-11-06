from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DB
from flask import flash
from flask_app.models.user_model import User

class Recipe :
    def __init__(self, data):
        self.id=data["id"]
        self.user_id=data["user_id"]
        self.name=data["name"]
        self.instructions=data["instructions"]
        self.date_made=data["date_made"]
        self.under_30=data["under_30"]
        self.description=data["description"]
        self.posted_by=User.get_by_id({'id':self.user_id})
    
    @classmethod
    def create(cls,data):
        query = """INSERT INTO recipes
                    (user_id,name,instructions,date_made,under_30,description)
                    VALUES (%(user_id)s,%(name)s,%(instructions)s,%(date_made)s,%(under_30)s,%(description)s);
                """
        return connectToMySQL(DB).query_db(query,data)


    @classmethod
    def get_all(cls):
        query="SELECT * FROM recipes;"
        results=connectToMySQL(DB).query_db(query)
        all_recipes=[]
        for row in results:
            all_recipes.append(cls(row))
        return all_recipes
    
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s"
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def get_by_id(cls,data):
        query="""SELECT * FROM recipes WHERE id=%(id)s;"""
        result=connectToMySQL(DB).query_db(query,data)
        if result:
            return cls(result[0])
        return None
    
    @classmethod
    def update(cls,data):
        query=""" UPDATE recipes SET name=%(name)s,instructions=%(instructions)s,date_made=%(date_made)s,
                under_30=%(under_30)s,description=%(description)s WHERE id=%(id)s; """
        return connectToMySQL(DB).query_db(query,data)



    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['name'])<3:
            is_valid=False
            flash(" recipe name is too short", 'name')
        if len(data['description'])<3:
            is_valid=False
            flash("recipe description must at least contain 3 characters", "description")
        if len(data['instructions'])<3:
            is_valid=False
            flash("recipe instructions must at least contain 3 characters", "instructions")
        if (data['date_made'])=="":
            is_valid=False
            flash("recipe Date must be provided", 'date_made')
        return is_valid