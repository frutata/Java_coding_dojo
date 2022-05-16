from flask_app import app

from flask import render_template, request, redirect, flash, session

from flask_app.models.show import Show
from flask_app.models.user import User

#==========================
# Creation routes
#==========================

@app.route('/add')
def add():

    if 'user_id' not in session:
        flash('*PLEASE login or register before proceeding')
        return redirect('/')
    
    query_data = {
        'user_id' : session['user_id']
    }

    user = User.get_by_id(query_data)

    return render_template('add.html', user = user)

@app.route('/add/show', methods=['post'])
def add_show():
    print(request.form)
    if not Show.validate_show(request.form):
        return redirect('/add')

    query_data_show = {
        'title' : request.form['title'],
        'network' : request.form['network'],
        'release_date' : request.form['release_date'],
        'description' : request.form['description'],
        'user_id' : session['user_id']
    }

    Show.add_show(query_data_show)

    return redirect('/dashboard')

#==========================
# Show routes
#==========================

@app.route('/show/<int:id>')
def show(id):

    if 'user_id' not in session:
        flash('*PLEASE login or register before proceeding')
        return redirect('/')

    data = {
        'id' : id
    }

    show = Show.show_show(data)

    query_data = {
        'user_id' : session['user_id']
    }

    user = User.get_by_id(query_data)

    return render_template('show.html', show = show, user = user)

@app.route('/show/delete/<int:id>')
def delete_show(id):

    data = {
        'id' : id
    }

    Show.delete_show(data)

    return redirect('/dashboard')

#==========================
# Edit routes
#==========================

@app.route('/edit/<int:id>')
def edit_show(id):

    if 'user_id' not in session:
        flash('*PLEASE login or register before proceeding')
        return redirect('/')

    data = {
        'id' : id
    }

    show = Show.show_show(data)

    return render_template('edit_show.html', show = show)

@app.route('/edit/show/<int:id>', methods=['post'])
def edit_show_data(id):

    if not Show.validate_show(request.form):
        return redirect(f'/edit/{id}')

    query_data_show = {
        'id' : request.form['id'],
        'title' : request.form['title'],
        'network' : request.form['network'],
        'release_date' : request.form['release_date'],
        'description' : request.form['description'],
        'user_id' : session['user_id']
    }

    Show.edit_show(query_data_show)

    return redirect('/dashboard')