from flask import Flask
import logging
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime, timedelta
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token,
                                get_jwt_identity, unset_jwt_cookies, create_refresh_token)
import pymysql
from flask_cors import CORS
import config


db = SQLAlchemy()
migrate = Migrate()
# --------------------------------------------------------------------------- #

def create_app():
    app = Flask(__name__)
# --------------------------------- [edit] ---------------------------------- #
    app.config.from_object(config)

    # ORM
    db.init_app(app)
    migrate.init_app(app, db)

    CORS(app, supports_credentials=True)
    # 블루프린트
# --------------------------------------------------------------------------- #
    from .views import auth, landing, upload, like, image, rank, hover_map, main_map
    app.register_blueprint(auth.bp)
    app.register_blueprint(landing.bp)
    app.register_blueprint(upload.bp)
    app.register_blueprint(like.bp)
    app.register_blueprint(image.bp)
    app.register_blueprint(rank.bp)
    app.register_blueprint(hover_map.bp)
    app.register_blueprint(main_map.bp)


    app.config['JWT_SECRET_KEY'] = 'doogood'
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(hours=20)


    jwt = JWTManager(app)
    bcrypt = Bcrypt(app)

    return app



# 현재 위치를 RESISTER로.
# export FLASK_APP=back
# export FLASK_ENV=development
# flask run