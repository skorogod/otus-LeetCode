FROM node:alpine

WORKDIR /leetcode
COPY package.json .
RUN npm install
COPY . .
CMD npm start