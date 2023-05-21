# pull official base image
FROM node:20.2-alpine3.16


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
