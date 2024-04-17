// main.js
// Capstone 2: Express
"use strict";

// 앱 설정

/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */
const port = 3001,
express = require('express'),
layout = require('express-ejs-layouts'),
homeController = require('./controllers/homeController'),
errorController = require('./controllers/errorController'),
app = express();

app.set("port",process.env.PORT || port);
app.set("view engine","ejs");

app.use(layout); //
app.use(express.static("public"));//정적파일 디렉토리

app.get('/name/:myName', homeController.respondWithName);
// app.get(); = GET method
// app.post(); = POST method


/**
 * Listing 12.4 (p. 177)
 * body-parser의 추가
 */


/**
 * Listing 12.6 (p. 178)
 * 각 페이지 및 요청 타입을 위한 라우트 추가
 */


/**
 * Listing 12.12 (p. 184)
 * 에러 처리 라우트 
 */
app.use(errorController.logErrors);
app.use(errorController.resNotFound);
app.use(errorController.resInternalError);

// 3000번 포트로 리스닝 설정
app.listen(app.get("port"),() =>{
    console.log(`Sever at http://localhost:${app.get("port")}`)
});