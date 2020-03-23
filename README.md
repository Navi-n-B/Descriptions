# nullbnb-description-proxy-server

** Read this to get the project setup

1. Create a .env in the root of this project, and your own database.json for config. examples have been provided.
2. You will have to make your own databases, since i dont have the maria-db CLI working fully yet. try logging into console and running CREATE DATABASE development;
2b. To pop your db run 'npm run db:seed'. This will use sequelize-cli to seed your db with some initial data.
3. npm install, then run 'npm run client' and 'npm run server' in your terminal. bam.

Let me know if something doesn't work.