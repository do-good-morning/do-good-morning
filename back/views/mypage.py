from flask import Blueprint, jsonify, send_from_directory
from flask import Flask, request
import bcrypt
from flask_cors import CORS
from .. import models
from . import checkvalid
from datetime import datetime, timedelta
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token, decode_token,
                                get_jwt_identity, unset_jwt_cookies, create_refresh_token)


bp = Blueprint('mypage', __name__, url_prefix='/')

@bp.route('/mypage', methods=['GET'])
def mypage():
    header = request.headers.get('Authorization')

    user_id = decode_token(header[7:] , csrf_value = None , allow_expired = False)['sub']  

    select_images = models.db.session.query(models.Image)\
                .filter(models.Image.user_id == user_id)\
                .order_by(models.Image.count_like.desc())\
                .limit(6).all()

    images = []
    user = models.User.query.filter_by(id = user_id).first() 
    for i in select_images:
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