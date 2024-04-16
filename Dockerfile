FROM node:alpine

WORKDIR /leetcode
COPY package.json .
RUN npm install
COPY . .
CMD npm run migration:run
CMD npm start