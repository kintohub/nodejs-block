FROM node:8.9.4

RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

ENV PORT=80

EXPOSE 80

ENTRYPOINT ["npm","run","start"]

