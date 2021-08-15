from flask import Blueprint
from flask import Flask, request
import bcrypt
from flask_cors import CORS
from .. import models
from . import checkvalid
from datetime import datetime, timedelta
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token, decode_token,
                                get_jwt_identity, unset_jwt_cookies, create_refresh_token)

from .. import error_code
from ast import literal_eval

bp = Blueprint('rank', __name__, url_prefix='/')

@bp.route('/rank', methods=['GET'])
def rank():
    user_top = models.db.session.query(models.Image.user_id, models.func.sum(models.Image.count_like) + models.func.count(models.Image.user_id) * 5)\
                    .group_by(models.Image.user_id)\
                    .order_by(models.func.sum(models.Image.count_like).desc())\
                    .limit(10)\
                    .all()

    user_top_lst = []

    for user_id, cnt in user_top:
        user = models.User.query.filter_by(id = user_id).first()
        user_top_lst.append([user.nickname, int(cnt)])
    

    country_top_posting = models.db.session.query(models.Image.image_country, models.func.count(models.Image.image_country))\
                    .group_by(models.Image.image_country)\
                    .order_by(models.func.count(models.Image.image_country).desc())\
                    .limit(10)\
                    .all()
    country_top_posting_lst = []

    for country, cnt in country_top_posting:
        country_top_posting_lst.append([country, cnt])


    country_top_like = models.db.session.query(models.Image.image_country, models.func.sum(models.Image.count_like))\
                    .group_by(models.Image.image_country)\
                    .order_by(models.func.sum(models.Image.count_like).desc())\
                    .limit(10)\
                    .all()

    country_top_like_lst = []

    for country, cnt in country_top_like:
        country_top_like_lst.append([country, int(cnt)])

    ranking = {
        "UserTop" : user_top_lst, 
        "CountryTopPosting" : country_top_posting,
        "CountryTopLike" : country_top_like_lst
        }


    return literal_eval(str(ranking))