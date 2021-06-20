# WeatherApp
---
## Content
* [Progect description](#progect-description)
* [Technologies used](#technologies)
* [Eslint](#eslint)
* [Build](#build)

---
## Project description
---

This app sends your request to [REST API](https://weatherstack.com/). Then draws:

  1. The name of the selected city, 
  2. Temperature, 
  3. Local time,
  4. Pressure,
  5. Wind speed and direction
  
 Also the application has a function of requesting weather according to your geolocation. By pressing the button <*History*> you can see you can see the history of the last five requests.

On the page you will see notifications and when you click on the checkbox, you can disable the opening of notifications on the page, if you click <*Open*> button, you open them back. 

To clear your history click button <*Clear*>

---
## Technologies
---
### To create this app used: 
 * "@babel/core": "v7.14.6",
 * "@babel/preset-env": "v7.14.5",
 * "babel-loader": "v8.2.2",
 * "css-loader": "v5.2.6",
 * "eslint": "v7.28.0",
 * "eslint-config-airbnb-base": "v14.2.1",
 * "eslint-config-prettier": "v8.3.0",
 * "eslint-plugin-import": "v2.23.4",
 * "eslint-plugin-prettier": "v3.4.0",
 * "file-loader": "v6.2.0",
 * "html-webpack-plugin": "v5.3.1",
 * "prettier": "v2.3.1",
 * "style-loader": "v2.0.0",
 * "webpack": "v5.39.1",
 * "webpack-cli": "v4.7.2",
 * "webpack-dev-server": "v3.11.2",
 * "webpack-merge": "v5.8.0"

 ### To install devDependencies use:
 ```
$ npm i
 ```
   
---
## Eslint
---
### To run ESlint you need next command:
```
$ npm run lint
```
### To run ESlint and fix error:
```
$npm run lint:fix
```
---
## Build
---
### For build like development this app use command: 
```
$ npm run build:dev
```

### For build like prod this app use command: 
```
$ npm run build:prod
```

### For use webpack serve :
```
$ npm run start
```
---
## Thank you for attention to my child <3
