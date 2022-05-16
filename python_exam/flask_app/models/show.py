from flask_app.config.mysqlconnection import connectToMySQL

from flask import flash

class Show:
    db = 'tv_schema'
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.title = data['title']
        self.network = data['network']
        self.release_date = data['release_date']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # self.user = {}

#=======================
# STATIC methods
#=======================

    @staticmethod
    def validate_show(form_data):
        is_valid = True

        if len(form_data['title']) < 3:
            flash('*Title MUST be at least 3 characters long and present!')
            is_valid = False
        if len(form_data['network']) < 3:
            flash('*Network MUST be at least 3 characters long and present!')
            is_valid = False
        if len(form_data['release_date']) < 6:
            flash('*Release date MUST be filled in!')
            is_valid = False
        if len(form_data['description']) < 3:
            flash('*Description MUST be at least 3 characters long and present!')
            is_valid = False

        return is_valid

#=======================
# CLASS methods
#=======================

    @classmethod
    def add_show(cls, data):
        query = 'INSERT INTO shows (title, network, release_date, description, created_at, user_id) VALUES (%(title)s, %(network)s, %(release_date)s, %(description)s, NOW(), %(user_id)s)'
        result = connectToMySQL(cls.db).query_db(query, data)
        return result

    @classmethod
    def get_all_shows(cls, data):
        query = 'SELECT * FROM shows;'
        result = connectToMySQL(cls.db).query_db(query, data)
        shows = []
        for i in result:
            shows.append( cls(i) )
        return shows

    @classmethod
    def show_show(cls, data):
        query = 'SELECT * FROM shows WHERE id = %(id)s;'
        result = connectToMySQL(cls.db).query_db(query, data)
        return cls(result[0])

    # @classmethod
    # def show_show(cls, data):
    #     query = 'SELECT * FROM shows LEFT JOIN users ON users.id = shows.user_id WHERE shows.id = %(id)s;'
    #     result = connectToMySQL(cls.db).query_db(query, data)

    #     #1 - grab show info
            # tv_show = cls(result[0])

    #     #2 - grab the user data

    #     #3 - connect the user back to the show
            # tv_show.user = user.User(user_data)
    #     # tv_show.user.first_name

    #     return tv_show

    @classmethod
    def delete_show(cls, data):
        query = 'DELETE FROM shows WHERE id = %(id)s;'
        result = connectToMySQL(cls.db).query_db(query, data)
        return result

    @classmethod
    def edit_show(cls, data):
        query = 'UPDATE shows SET title = %(title)s, network = %(network)s, release_date = %(release_date)s, description = %(description)s, updated_at = NOW() WHERE id = %(id)s;'
        result = connectToMySQL(cls.db).query_db(query, data)
        return result