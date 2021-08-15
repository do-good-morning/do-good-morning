from flask import Blueprint, jsonify, send_from_directory
from flask import Flask, request
import bcrypt
from flask_cors import CORS
from .. import models
from . import checkvalid
from datetime import datetime, timedelta
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token, decode_token,
                                get_jwt_identity, unset_jwt_cookies, create_refresh_token)
import random                           

bp = Blueprint('landing', __name__, url_prefix='/')

@bp.route('/landing', methods=['GET'])
def show_image():
    image_cnt = models.db.session.query(models.Image).count()
    rand_id = random.sample(range(image_cnt), 10)
    select_images = models.db.session.query(models.Image)\
        .filter(models.Image.id.in_(rand_id)).all()
    images = []
    for i in select_images:
        user = models.User.query.filter_by(id = i.user_id).first()
        image = {
            'Nickname' : user.nickname,
            'ImageData' : i.image_data,
            'ImageCountry' : i.image_country,
            'ImageCity' : i.image_city,
            'ImageId' : i.id,
            'ImageUploadTime' : i.image_upload_time,
            'ImageDescription' : i.image_description,
            'Like' : i.count_like
        }
        images.append(image)
    return {'images' : images }, 200

@bp.route('/img/<path:path>')
def send_js(path):
    return send_from_directory('/home/ubuntu/do-good-morning/back/img/', path)