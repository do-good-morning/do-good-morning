import csv
from usedb import UseDB
db = UseDB()

with open('user.csv', 'r', encoding='UTF8') as f:
    reader = csv.DictReader(f)

    for row in reader:
        db.user_insert(row['\ufeffnickname'],row['email'], row['pw'],row['sign_up_date'])

db.db_free()