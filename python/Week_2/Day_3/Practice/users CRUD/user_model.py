from mysqlconnection import connectToMySQL

class Users:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('users').query_db(query)
        users = []
        for data in results:
            users.append( Users(data) )
        return users
    
    @classmethod
    def user_id(cls, data):
        query = " SELECT * FROM users WHERE id=%(id)s; "
        db_result = connectToMySQL("users").query_db(query, data)
        result= Users(db_result[0])
        return result

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name,last_name,email) VALUES (%(first_name)s,%(last_name)s,%(email)s);"
        result = connectToMySQL('users').query_db(query,data)
        return result
    
    @classmethod
    def delete(cls, data):
        query = " DELETE FROM users WHERE id= %(id)s;"
        return connectToMySQL("users").query_db(query, data)
    
    @classmethod
    def edit(cls, data):
        query = " UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id= %(id)s;"
        return connectToMySQL("users").query_db(query, data)