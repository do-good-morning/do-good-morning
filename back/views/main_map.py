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
from sqlalchemy import create_engine, text
from ast import literal_eval

bp = Blueprint('main_map', __name__, url_prefix='/')


@bp.route('/main-map', methods=['GET'])
def get_country():
    image_count = models.db.session.query(models.Image.image_country, models.func.count(models.Image.image_country))\
                .group_by(models.Image.image_country)\
                .all()
    image_top_like = models.db.session.query(models.Image.image_country, models.func.max(models.Image.count_like))\
                    .group_by(models.Image.image_country)\
                    .all()
    image_top_like_lst = {}
    for country, like in image_top_like:

        image_data = models.Image.query.filter_by(image_country=country, count_like=like).first()
        image_top_like_lst[country] = []
        image_top_like_lst[country].append(image_data.image_data)
        image_top_like_lst[country].append(like)
        for i in image_count:
            if i[0] == country:
                image_top_like_lst[country].append(i[1])
                break
    return image_top_like_lst