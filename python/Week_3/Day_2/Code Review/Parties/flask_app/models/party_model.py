from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DB
from flask import flash

class Party :
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.location = data['location']
        self.all_ages = data['all_ages']
        self.date = data['date']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id= data['user_id']
        self.posted_by = ""

    @classmethod 
    def create(cls,data):
        query = "INSERT INTO parties (title, location, all_ages, date, description, user_id) VALUES (%(title)s, %(location)s, %(all_ages)s, %(date)s, %(description)s, %(user_id)s);"
        return connectToMySQL(DB).query_db(query , data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM parties JOIN users on parties.user_id = users.id"
        results = connectToMySQL(DB).query_db(query)
        all_parties=[]
        for row in results:
            party = cls(row)
            party.posted_by = f'{row["first_name"]} {row["last_name"]}'
            all_parties.append(party)
        return all_parties

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM parties JOIN users on parties.user_id = users.id where parties.id = %(id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        party = cls(result[0])
        party.posted_by = f'{result[0]["first_name"]} {result[0]["last_name"]}'
        return party
    
    @classmethod
    def update(cls,data):
        query = "Update parties SET title = %(title)s, location = %(location)s, description = %(description)s, date = %(date)s, all_ages = %(all_ages)s WHERE id= %(id)s;"
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM parties WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query, data)





    @staticmethod
    def validate(data):
        is_valid = True
        if len(data["title"])<2:
            is_valid= False
            flash("Title too short", "title")
        if len(data["location"])<2:
            is_valid= False
            flash("Location too short", "location")
        if len(data["description"])<1:
            is_valid= False
            flash("Description too short", "description")
        if data["date"]=="":
            is_valid= False
            flash("Date is required", "date")
        return is_valid