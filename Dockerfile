FROM node:latest
ADD . /src
ENV NODE_ENV=staging
WORKDIR /src
RUN npm install
CMD npm start
