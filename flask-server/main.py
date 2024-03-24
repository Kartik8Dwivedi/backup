import requests
from bs4 import BeautifulSoup

# url = 'https://www.amazon.in/Oneplus-Nord-Shimmer-128GB-Storage/product-reviews/B0C9QPJY5R/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews'

url = 'https://www.amazon.in/Apple-iPhone-14-128GB-Blue/product-reviews/B0BDK62PDX/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews'

response = requests.get(url)
soup = BeautifulSoup(response.text, 'lxml')

all_review = soup.find_all('span', class_="a-size-base review-text review-text-content")

all_reviews = []

# converting <class 'bs4.element.Tag'> to string
for tweets in all_review:
    tweets = str(tweets.span)
    tweets = tweets.replace('<br/>', ' ')
    tweets = tweets.replace('<span>', '')
    tweets = tweets.replace('</span>', '')
    tweets = tweets.replace('<br>', '')
    tweets = tweets.replace('</br>', '')

    all_reviews.append(tweets)

with open('reviews.txt', 'w') as f:
    for review in all_reviews:
        f.write(review)
        f.write('\n')
print(all_reviews)
