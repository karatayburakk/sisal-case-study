# Sisal Case Study

- This project has an user authentication system (API 1) and retrieve reddit top posts from sub-reddits (API 2).
- To use API 2, user should need to be authenticated from system (API 1) using JWT as Bearer Token.
- To get JWT, user need to signup or signin. Use API 1 endpoints
- There are also endpoints for API 1 to update password, forgot password and reset password
- To use API endpoints, there are Posman API collection and swagger API documentation.
- Postman API documentation: https://documenter.getpostman.com/view/13996544/2s93RNzFC3

# To Start Application

- Open terminal in root directory

- install node modules with command: **npm i**

- node_modules folder should be created after this commmand

- Compile TypeScript file with command: **npm run compile**

- dist folder should be created after this command

- Create .env file in root directory, you can use .env.template as an example. If .env file is emptly, application will use default settings.

- Now Application is ready to be launched with docker, run command: **npm run start**

- You should see docker starts, data-source and app containers running.

- You can also use one command to install node modules, compile TypeScript files and launch application with docker: **npm run start:scratch**

# 3rd Party Libraries

# Dependencies:

- bcryptjs: Password related jobs: Hash Password - Salt Password - Compare Hashed Password with given Password
- class-transformer and class-validator: To use DTO (Data Transfer Object)
- dotenv: To configure .env file with application
- express: Web Application Framework For building APIs
- jsonwebtoken: To Create JWT and send it to user
- mysql2: Mysql Driver for typeorm to connect Database To Application
- nodemailer: To send emails to users for forgot password or reset password
- reflect-metadata: to use experimentalDecorators and emitDecoratorMetadata
- typeorm: ORM for NodeJS applicaiton.

# DevDependencies

- @types/bcryptjs: Type Definitions for bcryptjs package
- @types/express: Type Definitions for express package
- @types/jsonwebtoken: Type Definitions for jsonwebtoken package
- @types/node: Type Definitions for node package
- @types/nodemailer: Type Definitions for nodemailer package
- @typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint-config-prettier, eslint-plugin-prettier, eslint-plugin-unused-imports, prettier: static code analysis tools for identifying problematic patterns and code formatter
- tsc-watch: Starts TypeScript Compiler with watch parameter, with the ability to react to compilation status.
- typescript: Strict syntactical superset of JavaScript and adds optional static typing to the language
