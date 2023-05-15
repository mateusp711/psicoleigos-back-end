FROM node:18-alpine

USER root

RUN mkdir /app
WORKDIR /app

COPY package.json ./
RUN yarn

COPY . .

CMD ["npm", "start"]
