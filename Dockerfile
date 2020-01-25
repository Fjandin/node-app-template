FROM node:12.14.1-alpine

EXPOSE 8081
EXPOSE 8181

LABEL maintainer="René Bischoff <rene.bischoff@gmail.com>"

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn

COPY . .

RUN yarn build

RUN mkdir -p ./node_modules/.cache
RUN chown -R node:node ./node_modules/.cache

USER node

CMD ["node", "dist/"]
