from flask import Flask
from app.controller import controllers


def create_app():
    app = Flask(__name__)
    app.config['DEBUG'] = True

    # Register the blueprints for endpoints in app instance
    app.register_blueprint(controllers.get_index_bp)
    app.register_blueprint(controllers.get_Sign_Up)
    app.register_blueprint(controllers.get_about_page_bp)
    app.register_blueprint(controllers.get_Payment_Details)

    return app
