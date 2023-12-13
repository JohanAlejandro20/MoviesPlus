FROM node:18-alpine

ENV APP=/appMovies

RUN mkdir -p $APP

WORKDIR $APP

COPY package*.json .

COPY . .

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check", "--poll", "100"]
LABEL authors="Johan-neira"
