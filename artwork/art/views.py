from django.shortcuts import render, redirect
from django.db import connection

db = connection.cursor()

def index(request):
    return render(request, 'source/index.html')

def artwork(request):
    if request.session.get('email') and request.session.get('pass'):
      return render(request, 'source/artwork.html')
    else:
      return redirect('/')

def register(request):
    if request.method == 'POST':
      email = request.POST['email']
      password = request.POST['pass']

      db.execute('SELECT * FROM art_data')

      request.session['email'] = email
      request.session['pass'] = password
      db.execute('INSERT INTO art_data (email, password) VALUES ("{0}", "{1}")'.format(email, password))

      return redirect('/artwork/')
    return render(request, 'source/register.html')
      
def login(request):
    if request.method == 'POST':
      email = request.POST['email']
      password = request.POST['pass']

      db.execute('SELECT * FROM art_data')

      for data in db.fetchall():
         if email in data and password in data:
           request.session['email'] = email
           request.session['pass'] = password
           return redirect('/artwork/')
      else:
        return render(request, 'source/login.html', {'data':'<script>alert("Incorrect Username and Password Try again!");</script>'})
    return render(request, 'source/login.html')

def settings(request):
    if request.session.get('email') and request.session.get('pass'):
      if request.method == 'POST':
        email = request.POST.get('email')
        current_password = request.POST.get('pass')
        change_password = request.POST.get('change-password')
        delete_email = request.POST.get('delete-email')
        delete_password = request.POST.get('delete-password')

        db.execute('SELECT * FROM art_data')

        for data in db.fetchall():
           if email in data and current_password in data:
             db.execute('UPDATE art_data SET password = "{0}" WHERE email = "{1}" AND password = "{2}"'.format(change_password, email, current_password))
             return render(request, 'source/settings.html', {'data':'<script>alert("Password Change Successfully");</script>'})

           elif delete_email in data and delete_password in data:
             db.execute('DELETE FROM art_data WHERE email = "{0}" AND password = "{1}"'.format(delete_email, delete_password))
             del request.session['email']
             del request.session['pass']
             return redirect('/')
           else:
             return render(request, 'source/settings.html', {'data':'<script>alert("Incorrect Username and Password Try again!");</script>'})
      return render(request, 'source/settings.html')
    else:
      return redirect('/')

def logout(request):
    try:
       del request.session['email']
       del request.session['pass']
    except:
       pass
    return redirect('/')
