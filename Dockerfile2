FROM alpine:latest
RUN apk add --no-cache nodejs npm
RUN apk add yarn

WORKDIR /app
COPY package.json /app
#RUN npm install

RUN yarn install
COPY . .
RUN yarn build

COPY . /app

EXPOSE 3000
CMD ["npm", "start"]
