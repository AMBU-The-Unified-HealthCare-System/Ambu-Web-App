from flask import request
from flask import Blueprint, render_template
import json
import requests


get_index_bp = Blueprint('index', __name__)
get_sign_in = Blueprint('sign_in',__name__)

@get_index_bp.route('/')
def index():
           # Render index.html
           return render_template('index.html')

@get_sign_in.route('/sign-in')
def sign_in():
           # Render sign-in.html
           return render_template('sign-in.html')
