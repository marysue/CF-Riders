# Solo React/Express.js Project

This is the backend for the Solo React / Express project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/react-project-starter.git
   ```
2. Install dependencies

   1. Install dependencies (`npm install`)
   2. Create a **.env** file based on the example with proper settings for your development environment
   3. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file with CREATEDB privileges
   4. Run
      * `npm run db:create`
      * `npm run db:migrate`
      * `npm run db:seed:all`
      * `npm start`

   ## Deploy to Heroku


   1. Create a new project
   2. In the react-apps directory, create a build :

      ```
      npm run build
      ```
   3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
   4. Setup your .env vars in Heroku (Settings->RevealVars) including your secret keys:

      ```CORS_ORIGIN: http://localhost:3000
      JWT_EXPIRES_IN: 60012
      JWT_SECRET: cb77cb9fa1fa800ebda04ff1b66960c7e8f43d9e0e5abc5069437859a2170830
      REACT_APP_BASE_URL: https://cfriders.herokuapp.com
      REACT_APP_IMAGE_URL: https://cfriders.herokuapp.com
      NODE_ENV: production
      ```
   5. Add the Buildpack on Heroku (Settings=>Add buildpack)
   6. Run `$ heroku login`
   7. If you have a Dockerfile, deploy to heroku with the following instructions:
      a.  `heroku container:login`
      b.  `heroku container:push web -a cfriders`
      c.  `heroku container:release web -a cfriders`
   8. If you wish to deploy files without a container or docker file:
      a. Add heroku as a remote to this git repo:
      `heroku git:remote -a cfriders`
      b. Push the project to heroku:
      `git push heroku main`
   9. Now that your app has been deployed to Heroku (very important to do this AFTER deploying, setup your database on Heroku:
      heroku=>resources=>add Heroku postgres db
   10. There are two ways to access your database.  One is through running bash on Heroku as follows:

   ```shell
       $ heroku run bash
       $ sequelize-cli db:migrate
       $ sequelize-cli db:seed:all
   ```
   The other way is through the heroku cli on your :

   ```heroku run -a cfriders sequelize-cli db:migrate
    heroku run -a cfriders sequelize-cli db:migrate
   heroku run -a cfriders sequalize-cli db:seed:all
   ```
   You can interact with your database this way as you'd like, but beware that `db:drop` should not be run in the heroku environment.  You can select your database, go to settings, and destroy your database on Heroku.
