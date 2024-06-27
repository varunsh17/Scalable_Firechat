FROM node:20-alpine

WORKDIR /varun

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn","run","dev" ]

