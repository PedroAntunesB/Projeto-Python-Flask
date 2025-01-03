from flask import Blueprint, render_template, request, url_for, redirect

route = Blueprint('route', __name__)

@route.route('/login')
@route.route('/')
def index():
    return render_template('index.html')


@route.route('/requestForm')
def login_form():
    return render_template('login.html')


@route.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    email = request.form.get('email')
    return redirect(url_for('route.home', username=username, password=password, email=email))


@route.route('/home/<username>')
def home(username):
    return render_template('home.html', username=username)