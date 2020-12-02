FROM node:12.19.1-alpine3.9

WORKDIR /api

COPY ./wait-for .

COPY ./backend/. .
COPY ./frontend/build/. ./public/.

ENV NODE_ENV=production \
JWT_SECRET=aaa967f1-2b08-4dde-a086-5df6bc8eff91 \
JWT_EXPIRES_IN=604800

CMD [ "npm", "start" ]
