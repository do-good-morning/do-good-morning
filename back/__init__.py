from flask import Flask
from flask_cors import CORS

import config


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    CORS(app, supports_credentials=True)
    
    # blueprint
    from .views import main, login
    app.register_blueprint(main.bp)
    app.register_blueprint(login.bp)

    return app
