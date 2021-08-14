# 제품 링크 포맷팅
def product(asin):
    return f'https://www.amazon.com/dp/{asin}'

# 제품 이미지 링크 포맷팅
def img(asin):
    return f'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN={asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL250'