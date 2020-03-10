FROM node:10
WORKDIR api

ADD . /api

RUN npm install

ENV PORT 80
EXPOSE 80

ENTRYPOINT ["npm", "run", "dev"]