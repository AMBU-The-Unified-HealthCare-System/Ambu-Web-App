from flask import request
from flask import Blueprint, render_template
import json
import requests

get_index_bp = Blueprint('index', __name__)
get_about_page = Blueprint('about-page', __name__)

@get_index_bp.route('/')
def index():
           # Render index.html
           return render_template('index.html')

@get_about_page.route('/about-page')
def index():
    # Render about-page.html
    return render_template('about-page.html')
