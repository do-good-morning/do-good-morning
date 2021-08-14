import re

def passwordCheck(pwd):

    if len(pwd) < 8 or len(pwd) > 21 and not re.findall('[0-9]+', pwd):
        print('비밀번호 기준에 맞지 않습니다. 비밀번호는 8자이상, 숫자+영어 조합으로 이루어집니다.')
        return 2

    else:
        print('비밀번호의 길이, 숫자, 영문자 등 유효함')
        return 1