import csv
from usedb import UseDB
db = UseDB()

with open('images.csv', 'r', encoding='UTF8') as f:
    reader = csv.DictReader(f)

    for row in reader:
        db.image_insert(row['\ufeffuser_id'],row['image_data'], row['image_country'],row['image_city'],row['image_upload_time'],row['image_description'], row['count_like'])

db.db_free()