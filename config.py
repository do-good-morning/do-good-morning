import os

BASE_DIR = os.path.dirname(__file__)

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:@localhost:3306/dogood'
SQLALCHEMY_TRACK_MODIFICATIONS = False