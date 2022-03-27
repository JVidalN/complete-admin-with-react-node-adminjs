# Complete Admin Page

System administration page with React + AdminJS, NodeJS and Postgres

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

5. ***Start Project and Go To The Home Page:*** <http://localhost:5000/admin>

    ``` javascript
    yarn dev
    ```

# References

[Dev Samurai - Master Class #006](https://www.youtube.com/watch?v=_pLOceLpRjo&list=WL&index=17&t=329s)
