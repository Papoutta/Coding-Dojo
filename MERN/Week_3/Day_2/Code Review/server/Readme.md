##Steps to create our server
$ mkdir server
$ cd server
$ touch server.js
$ npm init -y
$ npm i mongoose express dotenv cors
$ npm install --save-dev nodemon
Add "type": "module" to package.json
Add "dev": "npx nodemon" the "scripts" in package.json
$ mkdir config controllers models routes
$ touch .env 
$ touch .gitignore
$ cd config 
$ touch mongoose.config.js