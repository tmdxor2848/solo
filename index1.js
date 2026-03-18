const express = require('express');
const cors = require('cors');
const app = express();
const port =3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// app.get('/dog', (req,res) => {
//     res.json({'sound': '멍멍'});
// });

// app.get('/cat', (req,res) => {
//     res.json({'sound': '야옹'});
// });

app.get('/sound/:name', (req,res) => {
    const {name} = req.params;

    if (name =="dog") {
        res.json({'sound': '멍멍'});
}
// 너 지금 코드에서 👇

// res.json({'sound': '멍멍'});

// 이건 사실 이렇게 써도 똑같음👇

// res.json({ sound: '멍멍' });

// 👉 key는 따옴표 없어도 됨 (JS 객체)
    else if (name =='cat') {
        res.json({'sound': "야옹"});
}
    else if (name =='pig') {
        res.json({'sound': '꿀꿀'});
}
    else {
        res.json({'sound': '알수없음'});
    };
});

// if문 말고 객체로 처리
// app.get('/sound/:name', (req, res) => {
//     const { name } = req.params;

//     const sounds = {
//         dog: '멍멍',
//         cat: '야옹',
//         pig: '꿀꿀'
//     };

//     res.json({
//         sound: sounds[name] || '알수없음'
//     });
// });

app.listen(port, () =>{
    console.log(`Example app listening on por ${port}`);
});
