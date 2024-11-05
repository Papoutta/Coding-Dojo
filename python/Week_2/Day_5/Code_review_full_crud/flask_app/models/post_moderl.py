from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DB

class Post:
    def __init__(self, data): # data={'id':1, 'title':'coding', 'image':'coding.png','description':'lorem'...}
        self.id=data["id"]
        self.title=data["title"]
        self.image=data["image"]
        self.description=data["description"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]

#CREATE
    @classmethod 
    def create_post(cls,data):
        query = "INSERT INTO posts (title,image, description) VALUES (%(title)s,%(image)s, %(description)s);"
        return connectToMySQL(DB).query_db(query,data) #the insert gives you the id 
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM posts;"
        results = connectToMySQL(DB).query_db(query) #gives you a list of dictionnaries
        posts = []
        for row in results:
            posts.append(cls(row))
        return posts

    @classmethod
    def get_by_id(cls, data):
        query = " select * from posts where id = %(id)s ;" 
        result = connectToMySQL(DB).query_db(query, data) #gives you a list of a single dictionnary
        if len(result) < 1 :
            return False
        return cls(result[0])
    
    @classmethod
    def update(cls, data):
        query = "update posts set title = %(title)s, image = %(image)s, description = %(description)s  where id = %(id)s ;"
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM posts WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query, data)
