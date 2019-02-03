FROM node:9.6.1

LABEL version="2.0"
LABEL description="GPS Web NodeJS"
LABEL maintainer="Juan Esteban Henao - jhenaom6@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp

COPY . ./

RUN npm install 

FROM mongo:latest
RUN mkdir -p /data/db2 \ 
    && echo "dbpath = /data/db2" > /etc/mongodb.conf \ 
    && chown -R mongodb:mongodb /data/db2

COPY . /data/db2


RUN mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db2 --smallfiles \ 
    && CREATE_FILES=/data/db2/scripts

EXPOSE 3000
CMD ["mongod", "--config", "/etc/mongodb.conf", "--smallfiles"]
CMD npm start
