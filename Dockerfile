FROM node:12 AS build-stage
WORKDIR /react-app
COPY react-app/. .

ENV REACT_APP_BASE_URL=https://cfriders.herokuapp.com/

#Build our React App
RUN npm install
RUN npm run build

FROM node:12
WORKDIR /public
COPY . .
COPY --from=build-stage /react-app/build /client/build/
RUN npm install
RUN npm install -g sequelize-cli
EXPOSE 8080
CMD ["npm", "start"]
