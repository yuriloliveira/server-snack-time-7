FROM node:12
WORKDIR /home/node/app
CMD yarn install && yarn start