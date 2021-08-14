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

bp = Blueprint('hover_map', __name__, url_prefix='/')


@bp.route('/hover_map', methods=['POST'])
def get_country():
    body = request.get_json()
    country = body['HoverCountry']
    images = models.Image.query.filter_by(image_country=country).all()
    if len(images):
        print_image = images[random.randrange(len(images))].image_data
    else:
        print_image = None
    return {'image': print_image, "count": len(images)}