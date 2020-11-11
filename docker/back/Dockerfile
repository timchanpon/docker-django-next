FROM python:3

ENV PYTHONUNBUFFERED 1

ADD . /tmp/

RUN mkdir -p /var/www/html
RUN mv /tmp/keygenerator.py /usr/src/

RUN echo 'export `python3 /usr/src/keygenerator.py`' >> ~/.bashrc
RUN pip install -r /tmp/requirements.txt
RUN rm -rf /tmp/*
