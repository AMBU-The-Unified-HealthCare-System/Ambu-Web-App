from flask import request
from flask import Blueprint, render_template
import json
import requests


get_index_bp = Blueprint('index', __name__)
get_profile_page = Blueprint('', __name__)
get_our_services = Blueprint('', __name__)

@get_index_bp.route('/')
def index():
           # Render index.html
           return render_template('index.html')


@get_profile_page.route('/profile-page')   
def profile_page():
    # Render profile-page.html
    return render_template('profile-page.html')   

 @get_our_services.route('/our-services')   
def our_services():
    # Render our-services.html
    return render_template('our-services.html')      