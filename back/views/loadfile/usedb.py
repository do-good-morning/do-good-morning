import pymysql

class UseDB:
    def __init__(self):
        self.db_init()
    def db_init(self):
        self.con = pymysql.connect(host="localhost", user='root',
                passwd='', db='dogood', charset='utf8', port = 3306)
    def db_free(self):
        if self.con:
            self.con.close()
    def image_insert(self, user_id, image_data, image_country, image_city, image_upload_time, image_description, count_like):
        sql = ''' insert into image(`user_id`, `image_data`, `image_country`, `image_city`, `image_upload_time`, `image_description`, `count_like`)
              values(%s, %s, %s, %s, %s, %s, %s);  '''
        with self.con.cursor() as cursor:
            cursor.execute(sql, (user_id, image_data, image_country, image_city, image_upload_time, image_description, count_like))
        self.con.commit()