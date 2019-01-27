FROM node:9.6.1

LABEL version="1.0"
LABEL description="Web app Articulos NodeJS"
LABEL maintainer="Edwin Montoya - emontoya@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install express express-handlebars express-session method-override monoose passport passport-local bcryptjs connect-flash

EXPOSE 3000
CMD npm start
