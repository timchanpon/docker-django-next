FROM python:3

ENV PYTHONUNBUFFERED 1

ADD requirements.txt /tmp/

RUN pip install -r /tmp/requirements.txt
RUN rm /tmp/requirements.txt
RUN mkdir -p /var/www/html

WORKDIR /var/www/html
