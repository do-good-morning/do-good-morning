from flask import Blueprint
from flask_cors import CORS

bp = Blueprint('login', __name__, url_prefix='/')

@bp.route('/test')
def test():
    token = 'fawefsdfasl;'

    return {'token':token, 'status' : 200}

    {
        'header' : {sdaf:},
        'body' : {'pw': sadfa, 'email' :dasfeo}

    }
