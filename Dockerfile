FROM node:18.12.0-alpine

WORKDIR /app

COPY . . 

RUN npm install 

RUN npm build 

CMD [ "npm", "run", "start" ]