const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());    // 요청 본문에 포함된 제이슨 데이터를 해석할 수 있도록 하기
app.use(express.urlencoded({ extended: true}));
                            // form으로 입력받은 요청 데이터를 처리할 수 있도록 하기

app.set('view engine', 'ejs');  //템플릿 엔진으로 EJS사용
app.get('/', (req, res) => {    // '/'경로로 접속하면 index.ejs 내용을 웹 브라우저에 표시
    res.render('index', { num: 3 });
});
app.get('/create', (req, res) => {
    console.log(req.query);
    res.send('hi');
});
app.post('/create', (req, res) => { // '/create' 경로로 들어오는 POST 요청을 처리할 수있는 코드
    console.log(req.body);
    res.send('hi');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});