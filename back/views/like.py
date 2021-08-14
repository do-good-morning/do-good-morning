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

bp = Blueprint('like', __name__, url_prefix='/')

@bp.route('/like', methods=['POST'])
def Bookmark():
    if not request.is_json:
        return error_code.missing_json_error

    else:
        body = request.get_json()
        
        image_id = body['ImageId']
        header = request.headers.get('Authorization')

        user_id = decode_token(header[7:] , csrf_value = None , allow_expired = False)['sub']
        bookmark = models.Bookmark.query.filter_by(image_id=image_id, user_id=user_id).first()
        image = models.Image.query.filter_by(id=image_id).first()

        if bookmark is not None:
            models.db.session.delete(bookmark)
            models.db.session.commit()
            image.count_like -= 1
            models.db.session.commit()

            return {'msg' : 'Delete bookmark'}, 200
            
        else:
            bookmark = models.Bookmark(
                            image_id=image_id,
                            user_id=user_id,
                            date=datetime.now()
                        )
            models.db.session.add(bookmark)
            models.db.session.commit()
            image.count_like += 1
            models.db.session.commit()

            return {'msg' : 'Make bookmark'}, 200