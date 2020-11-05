FROM python:3

ENV PYTHONUNBUFFERED 1

ADD . /tmp/

RUN mkdir /var/src
RUN mkdir -p /var/www/html
RUN mv /tmp/keygenerator.py /var/src/
RUN pip install -r /tmp/requirements.txt
RUN rm -rf /tmp/*
