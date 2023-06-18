from flask import Flask
from app.controller import controllers


def create_app():
    app = Flask(__name__)
    app.config['DEBUG'] = True
    
    # Register the blueprints for endpoints in app instance
    app.register_blueprint(controllers.get_index_bp)
    app.register_blueprint(controllers.get_profile_page)
    app.register_blueprint(controllers.get_our_services)

    return app