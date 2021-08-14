from flask import Blueprint, jsonify, request
from flask_cors import CORS

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def hello_pybo():
    return '두굿모닝 화이팅!!'


