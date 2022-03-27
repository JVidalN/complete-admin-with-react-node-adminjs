# Complete Admin Page

System administration page with React + AdminJS, NodeJS and Postgres

## Refereces

[Dev Samurai - Master Class #006](https://www.youtube.com/watch?v=_pLOceLpRjo&list=WL&index=17&t=329s)

Home Page: http://localhost:5000/admin
pgAdmin: http://localhost:8000/browser/

Commands:
Run Project: yarn dev
Execute Migrate: yarn db:migrate
Execute Undo Migrate: yarn db:undo
Start Docker: yarn docker:up 

Create model with sequelize

Models Created
User
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password_hash:string

Project
npx sequelize-cli model:generate --name Project --attributes name:string,description:string,status:enum,user_id:integer

Task
npx sequelize-cli model:generate --name Task --attributes due_date:date,effort:integer,title:string,description:text,order:integer,status:enum,user_id:integer,project_id:integer

Execute sequelize migrate
npx sequelize-cli db:migrate