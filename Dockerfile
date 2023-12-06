FROM node:18-alpine

ENV APP =/appMovies

RUN mkdir -p $APP

WORKDIR $APP

COPY . .

RUN npm install -g @angular/cli

CMD ["ng", "serve", "--host", "0.0.0.0"]

LABEL authors="johan-neira"
