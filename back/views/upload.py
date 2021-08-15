import os
from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename
from flask import Blueprint, jsonify
from pytz import timezone
from datetime import datetime, timedelta
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token, decode_token,
                                get_jwt_identity, unset_jwt_cookies, create_refresh_token)
from flask_cors import CORS
from .. import models
from ast import literal_eval

bp = Blueprint('upload', __name__, url_prefix='/')

@bp.route('/fileupload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        header = request.headers.get('Authorization')
        user_id = decode_token(header[7:] , csrf_value = None , allow_expired = False)['sub']

        image_country = request.form['ImageCountry']
        image_city = request.form['ImageCity']
        image_description = request.form['ImageDescription']
    
        f = request.files['ImageData']
        f.save('./back/img/' + secure_filename(f.filename))

        image_data = f.filename

        image = models.Image(
                    user_id = user_id,
                    image_data = image_data,
                    image_country = image_country,
                    image_city = image_city,
                    image_upload_time = datetime.now(timezone('Asia/Seoul')).time(),
                    image_description = image_description
                )
        models.db.session.add(image)
        models.db.session.commit()
    return {'msg' : 'success'}, 200
