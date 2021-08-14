from back import db
from sqlalchemy import ForeignKey, DateTime, Column, Integer, String, DATE, Text, func, Boolean, Float, Table


class User(db.Model):  # usertable
    __tablename__ = 'user'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}

    id = Column(Integer, primary_key=True, autoincrement=True)
    nickname = Column(String(64), unique=True)
    email = Column(String(320), unique=True)
    pw = Column(String(64), nullable=False)
    sign_up_date = Column(DATE, nullable=False)

class Image(db.Model):  # user_image_table
    __tablename__ = 'image'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id', ondelete='cascade'))
    image_data = Column(Text(16000000), nullable=True)
    image_country = Column(String(256))
    image_city = Column(String(256))
    image_upload_time = Column(String(256))
    image_description = Column(Text(16000000), nullable=True)

class Like(db.Model):
    __tablename__:'like'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id', ondelete='cascade'))
    image_id = Column(Integer, ForeignKey('image.id', ondelete='cascade'))
    date = Column(DATE)