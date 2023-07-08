from flask import request
from flask import Blueprint, render_template
import json
import requests

get_index_bp = Blueprint('index', __name__)
get_Sign_Up = Blueprint('Sign_Up', __name__)
get_about_page_bp = Blueprint('about_page', __name__)
get_Payment_Details = Blueprint('Payment_Details',__name__)


@get_index_bp.route('/')
def index():
    # Render index.html
    return render_template('index.html')


@get_Sign_Up.route('/Sign_Up')
def index():
    # Render Sign_Up.html
    return render_template('Sign_Up.html')


@get_about_page_bp.route('/about')
def index():
    # Render Sign_Up.html
    return render_template('about-page.html')

@get_Payment_Details.rout('/Payment_Details')
def index():
    # Render Payment_Details.html
    return render_template('Payment_Details')
