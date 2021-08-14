from flask import Blueprint, jsonify, request, session
import bcrypt
from flask_cors import CORS
from .. import models
from . import checkvalid
from datetime import datetime, timedelta
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token, decode_token,
                                get_jwt_identity, unset_jwt_cookies, create_refresh_token)
from .. import error_code
import json
import shutil
import os

bp = Blueprint('auth', __name__, url_prefix='/')

@bp.route('/sign-up', methods=['POST'])
def register():
    if not request.is_json:
        return error_code.missing_json_error

    else:
        body=request.get_json()

        email = body['Email']
        pw = body['Password']
        nickname = body['Nickname']

        emailcheck = models.User.query.filter_by(email=email).first()
        nicknamecheck = models.User.query.filter_by(nickname=nickname).first()

        if not(email and pw and nickname):
            return error_code.error_body('missing_param','Missing parameter in request')
        elif emailcheck is not None:
            return error_code.error_body('alr_signed_email','This email has already been signed up')

        elif nicknamecheck is not None:
            return error_code.error_body('alr_signed_nickname','This nickname has already been signed up')

        if checkvalid.passwordCheck(pw) == 1:
            hashpw = bcrypt.hashpw(
                pw.encode('utf-8'), bcrypt.gensalt())

            user = models.User(
                nickname=nickname,
                email=email,
                pw=hashpw,
                sign_up_date=datetime.now()
            )
            models.db.session.add(user)
            models.db.session.commit()
           
            queried = models.User.query.filter_by(email=email).first()
            accessToken = create_access_token(identity=queried.id, fresh=True)

            return {
                        'AccessToken': accessToken,
                        'Nickname': queried.nickname,
                        'Email' : queried.email
                    }, 200

        elif checkvalid.passwordCheck(pw) == 2:
            return error_code.error_body('invalid_pw','Password must contain at least one number digit, one special character, one English character,and be at least 8 characters')
        else:
            return error_code.error_body('invalid_pw','Password must contain at least one special character')


@bp.route('/sign-in', methods=['POST'])
def login():
    if not request.is_json:
        return error_code.missing_json_error

    else:
        body=request.get_json()

        email = body['Email']
        pw = body['Password']

        queried = models.User.query.filter_by(email=email).first()

        if queried is None:
            return error_code.error_body('not_exists','This member does not exist')

        if not email:
            return error_code.error_body('missing_email','Missing email in request')

        if not pw:
            return error_code.error_body('missing_pw','Missing password in request')

        if bcrypt.checkpw(pw.encode('utf-8'), queried.pw.encode('utf-8')):
            accessToken = create_access_token(identity=queried.id, fresh=True)
            return {
                    'AccessToken': accessToken,
                    'Nickname': queried.nickname,
                    'Email' : queried.email
                  }, 200

        else:
            return error_code.error_body('incorrect_pw','Incorrect Password')

@bp.route("/protected", methods=["GET"])
@jwt_required(fresh=True)

def protected():
    return {'msg': 'Succeed accessing protected area'}, 200