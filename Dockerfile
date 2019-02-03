FROM node:9.6.1

LABEL version="2.0"
LABEL description="GPS Web NodeJS"
LABEL maintainer="Juan Esteban Henao - jhenaom6@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install

EXPOSE 3000
CMD npm start
