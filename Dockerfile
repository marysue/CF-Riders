FROM node:12.19.1-alpine3.9

WORKDIR /api

COPY ./wait-for .

COPY ./backend/. .
COPY ./frontend/build/. ./public/.

ENV NODE_ENV=production \
JWT_SECRET=cb77cb9fa1fa800ebda04ff1b66960c7e8f43d9e0e5abc5069437859a2170830 \
JWT_EXPIRES_IN=60012

CMD [ "npm", "start" ]
