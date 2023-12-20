# API Crud using Node.js

This is a simple example of using Node.js to create a CRUD API. This project was developed for study purposes only. The technologies used include PostgreSQL, Express, and Node.js.

## Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/)

## Database Setup

1. Run PostgreSQL and create a database for the application.
2. Use the `schema.sql` script to create the necessary table. You can do this by executing the following command in the directory where the `schema.sql` file is located:

     psql -U your_user -d your_database -a -f schema.sql
   
- Replace your_user with the name of your PostgreSQL user and your_database with the name of the database you created.

## Install dependencies and start the project

1. In the project's root directory, give the command "npm install";
2. Now give the command "npm start"
   
