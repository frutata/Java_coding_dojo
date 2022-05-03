from flask_app import app

from flask import render_template, request, redirect, session, flash

from flask_app.models.user import User
from flask_app.models.show import Show

from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

# we are creating an object called bcrypt, 
# which is made by invoking the function Bcrypt with our app as an argument

#==========================
# Login page route
#==========================

@app.route('/')
def login():
    return render_template('login.html')

#==========================
# Register route
#==========================

@app.route('/register', methods=['post'])
def register():

    #1 validate info
    if not User.validate_register(request.form):
        return redirect('/')

    #2 collect data for query
    pw_hash = bcrypt.generate_password_hash(request.form['password'])

    query_data = {
        'first_name' : request.form['first_name'],
        'last_name' : request.form['last_name'],
        'email' : request.form['email'],
        'password' : pw_hash
    }

    #3 run query (add user to data)
    new_user_id = User.register_user(query_data)

    #4 log them in (via session)
    session['user_id'] = new_user_id

    #5 redirect elsewhere
    return redirect('/dashboard')

#==========================
# Login user route
#==========================

@app.route('/login_user', methods=['post'])
def login_user():

    #1 validate login info
    if not User.validate_login(request.form):
        return redirect('/')

    #2 pull user data to log them in
    logged_user = User.get_by_email(request.form)
    session['user_id'] = logged_user.id

    #3 redirect elswhere
    return redirect('/dashboard')

#==========================
# Dashboard route
#==========================

@app.route('/dashboard')
def dashboard():

    if 'user_id' not in session:
        flash('*PLEASE login or register before proceeding')
        return redirect('/')
    
    query_data = {
        'user_id' : session['user_id']
    }

    user = User.get_by_id(query_data)
    
    shows = Show.get_all_shows(query_data)

    return render_template('dashboard.html', user = user, shows = shows)

#==========================
# Logout route
#==========================

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')