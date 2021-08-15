from flask import Blueprint, jsonify, send_from_directory
from flask import Flask, request
import bcrypt
from flask_cors import CORS
from .. import models
from . import checkvalid
from datetime import datetime, timedelta
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token, decode_token,
                                get_jwt_identity, unset_jwt_cookies, create_refresh_token)

bp = Blueprint('image', __name__, url_prefix='/')

@bp.route('/main-image', methods=['POST'])
def main_image():
    if not request.is_json:
        return error_code.missing_json_error

    else:
        body = request.get_json()
        
        image_country = body['ImageCountry']
        image_city = body['ImageCity']

        if image_country == '' and image_city == '':
            top_images = models.db.session.query(models.Image)\
                        .order_by(models.Image.count_like.desc()).limit(6).all()

            images = []
            
            for i in top_images:
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
            return {'Images' : images}, 200
        
        else:
            top_images = models.db.session.query(models.Image)\
                        .filter(models.Image.image_country == image_country)\
                        .order_by(models.Image.count_like.desc()).limit(6).all()
            count_images = models.db.session.query(models.Image)\
                        .filter(models.Image.image_country == image_country)\
                        .count()
            images = []
            
            for i in top_images:
                user = models.User.query.filter_by(id = i.user_id).first()
                image = {
                    'Nickname' : user.nickname,
                    'ImageData' : i.image_data,
                    'ImageCountry' : i.image_country,
                    'ImageCity' : i.image_city,
                    'ImageId' : i.id,
                    'ImageUploadTime' : i.image_upload_time,
                    'ImageDescription' : i.image_description,
                    'CountImages' : count_images,
                    'Like' : i.count_like
                }
                images.append(image)
            return {'Images' : images}, 200