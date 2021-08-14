from flask import Blueprint, jsonify, send_from_directory
from flask import Flask, request
import bcrypt
from flask_cors import CORS
from sqlalchemy.sql.functions import count
from .. import models
from . import checkvalid
from datetime import datetime, timedelta
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token, decode_token,
                                get_jwt_identity, unset_jwt_cookies, create_refresh_token)
import random

bp = Blueprint('main_map', __name__, url_prefix='/')


@bp.route('/main_map', methods=['GET'])
def get_country():
    images = models.db.session.query(models.Image).all()
    cols = []
    for image in images:
        if image.image_country not in cols:
            cols += [image.image_country]

    for col in cols:
        imgs = dict()
        print(col, end="")
        img = models.Image.query.filter_by(image_country=col).all()
        imgs["count"] = len(img)
        img = img[random.randrange(len(img))].image_data

    return 'a'  # {'images': result}