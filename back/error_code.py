def error_body(error_code, msg):
    return {'errorCode': error_code, 'msg': msg}, 400

missing_json_error = ({'errorCode': 'missing_json', 'msg': 'Missing JSON in request'}, 400)