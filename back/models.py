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