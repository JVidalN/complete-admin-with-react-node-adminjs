# Complete Admin Page

    System administration page with React + AdminJS, NodeJS and Postgres.

## Demonstration

[![Netlify Status](https://api.netlify.com/api/v1/badges/2eb231b0-a44c-4a2f-9819-3ae3b7e61084/deploy-status)](https://app.netlify.com/sites/jvn-task-manager/deploys) 
### [Demo](https://jvn-task-manager.netlify.app)

## Images

![Login Page](/git_files/login_page.png) ![Home Page](/git_files/home_page.png)
# How To Run

1. ***Install dependencies:***

    ``` javascript
    yarn install or npm install
    ```

2. ***Configure Environment Variables:***
    - Create a new `.env` file from `.env.example`.

3. ***Up Docker Containers (Docker must be installed):***
    - Use [Samurai Dev Guide](https://guia.devsamurai.com.br/docs/ambiente-de-desenvolvimento/docker/) To Configure Steps 3 and 4.

    ``` javascript
    yarn docker:up
    ```

4. ***Access PgAdmin To Register Database:***
    - pgAdmin: <http://localhost:8000>

5. ***Run Database Migrate Scripts:***

    ``` javascript
    yarn db:migrate
    ```
6. ***Run Seeds Scripts To Create Default Users:*** <http://localhost:5000/admin>

    ``` javascript
    npx sequelize-cli db:seed:all
    ```

7. ***Start Project and Go To The Home Page:*** <http://localhost:5000/admin>

    ``` javascript
    yarn dev
    ```

# References

[Dev Samurai - Master Class #006](https://www.youtube.com/watch?v=_pLOceLpRjo&list=WL&index=17&t=329s)
